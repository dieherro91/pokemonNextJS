import { GetStaticPaths } from 'next'
import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring';

import { NextPage } from 'next'

import React, { useContext, useEffect } from 'react'
import { Pokemon } from '../../models/ServicesModel';
import { pokeApi } from '../../services';
import { TitleContext } from '../../context/title.context';
import { titleContextType } from '../../models/ContextModel';
import { Button, Checkbox, Input } from '@nextui-org/react';
import { Controller, useForm, FormProvider, useFieldArray } from 'react-hook-form';
import Select from 'react-select';
import { InsideArray } from '../../src/components/insideArray';
interface Props {
    pokemon: Pokemon
}
export interface bodyObject {
    id: string;

    cosas3: cosas2Interface[];
}
export interface cosas2Interface {
    id: string;
    cosas4: cosas3Interface[];
}
export interface cosas3Interface {
    id: string;
    cosa5: string;
}
const PokemonPage: NextPage<Props> = ({ pokemon }) => {
    const { changeTitle } = useContext<titleContextType>(TitleContext);
    useEffect(() => {
        if (pokemon.name) {
            changeTitle(`${pokemon.name}`);
        }
    }, []);
    const ObjetoPrueba: bodyObject = {
        id: 'Idplano',
        cosas3: [
            {
                id: 'id debajo 1',
                cosas4: [
                    { id: 'asdasd1', cosa5: 'cosa4-1' },
                    { id: 'asdasd2', cosa5: 'cosa4-2' },
                    { id: 'asdasd3', cosa5: 'cosa4-3' },
                ]
            },
            {
                id: 'id debajo 2',
                cosas4: [
                    { id: 'asdasd1-2', cosa5: 'cosa4-1-2' },
                    { id: 'asdasd2-2', cosa5: 'cosa4-2-2' },
                    { id: 'asdasd3-2', cosa5: 'cosa4-3-2' },
                ]
            },
        ]
    }
    const methods = useForm<bodyObject>({
        defaultValues: {
            id: 'Idplano',
            cosas3: [
                {
                    id: 'id debajo 1',
                    cosas4: [
                        { id: 'asdasd1', cosa5: 'cosa4-1' },
                        { id: 'asdasd2', cosa5: 'cosa4-2' },
                        { id: 'asdasd3', cosa5: 'cosa4-3' },
                    ]
                },
                {
                    id: 'id debajo 2',
                    cosas4: [
                        { id: 'asdasd1-2', cosa5: 'cosa4-1-2' },
                        { id: 'asdasd2-2', cosa5: 'cosa4-2-2' },
                        { id: 'asdasd3-2', cosa5: 'cosa4-3-2' },
                    ]
                },
            ]
        },

    });
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control:methods.control, // control props comes from useForm (optional: if you are using FormContext)
        name: "cosas3", // unique name for your Field Array
      });
    const onSubmit = (data: any) => console.log(data);

    return (
        <div>
            
            <span>{pokemon.id}-</span>
            <span>{pokemon.name}</span>
            <Button onClick={()=>append({id:'',cosas4:[{id:'',cosa5:''}]})}>append</Button>
            <Button onClick={()=>remove(3)}>remove</Button>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} id='aws' >
                    <Controller
                        name="id"
                        control={methods.control}
                        render={({ field }) => {
                            return (<Input {...field} />)
                        }
                        }
                    />
                    <hr />
                    {fields.map(
                        (field, index: number) => {
                            return (
                                <div key={`cosas-${index}`}>
                                    <Input key={field.id} 
                                    {...methods.register(`cosas3.${index}.id`)} 
                                    />
                                    <InsideArray 
                                    control={methods.control}
                                    index={index}
                                    value={field}
                                    />
                                    <hr />
                                </div>
                                
                            )
                        })
                    }
                    {/* <Controller
                        name="select"
                        control={methods.control}
                        render={({ field }) =>
                            <Select
                                {...field}
                                options={[
                                    { value: "chocolate", label: "Chocolate" },
                                    { value: "strawberry", label: "Strawberry" },
                                    { value: "vanilla", label: "Vanilla" }
                                ]}
                            />}
                    /> */}


                    {/* <label htmlFor="1">asdasd</label>

                <Input aria-label='1' type="text" name='1' form='aws' placeholder='asdasd ' /> */}
                <hr />
                    <button type='submit'>aaa</button>

                </form>
                
            </FormProvider>
        </div>
    )
}


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
interface Params extends ParsedUrlQuery {
    id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async (ctx) => {
    //const { data } = await  // your fetch function here 
    const pokemon151 = [...Array(151)]
    for (let index = 0; index < 151; index++) {
        pokemon151[index] = {
            params: {
                id: String(index + 1)
            }
        }
    }
    return {
        paths: pokemon151,
        fallback: false
    }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async (ctx) => {
    const { id } = ctx.params as { id: string };
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`) // your fetch function here 
    return {
        props: {
            pokemon: data
        }
    }
}

export default PokemonPage