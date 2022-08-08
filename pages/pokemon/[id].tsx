import { GetStaticPaths } from 'next'
import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring';

import { NextPage } from 'next'

import React, { useContext, useEffect } from 'react'
import { Pokemon } from '../../models/ServicesModel';
import { pokeApi } from '../../services';
import { TitleContext } from '../../context/title.context';
import { titleContextType } from '../../models/ContextModel';
interface Props {
    pokemon: Pokemon
}
const PokemonPage: NextPage<Props> = ({ pokemon }) => {
    const { changeTitle } = useContext<titleContextType>(TitleContext);
    useEffect(() => {
        if (pokemon.name) {
            changeTitle(`${pokemon.name}`);
        }
    }, []);
    return (
        <div>

            <span>{pokemon.id}-</span>
            <span>{pokemon.name}</span>
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