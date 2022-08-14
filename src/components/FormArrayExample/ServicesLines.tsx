import React, { FC } from 'react'
import { Controller, useFieldArray } from 'react-hook-form';

import { ServicesLinesInterface, OfferClient } from './interfaces';
import { Button, Input } from '@nextui-org/react';
import { ServicesLinesGroups } from './ServicesLinesGroups';




export const ServicesLines: FC<ServicesLinesInterface> = ({ control,
    register, getValues, setValue, errors }) => {
    const { fields, append, remove, prepend, } = useFieldArray({
        control,
        name: "commercial_offers_services_lines"
    });
    console.log("eerores",errors)
    return (
        <div>
            <div>
                {fields.map((ServicesLine, index) => {
                    return (
                        <div key={ServicesLine.id}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                                <div>
                                    <label >
                                        ID Linea servicio
                                        </label>
                                        <Input
                                            defaultValue={ServicesLine.id}
                                            {...register(`commercial_offers_services_lines.${index}.line_id`, { required: true, maxLength: { value: 2, message: "error message" } })}
                                        />
                                        {errors &&
                                        errors?.commercial_offers_services_lines&&
                                        errors?.commercial_offers_services_lines[index] && 
                                        <span role="alert">{errors?.commercial_offers_services_lines[index]!.line_id?.message}</span>}
                                        
                                </div>
                                <Button type="button" onPress={() => remove(index)}>
                                    Delete Service Line
                                </Button>
                            </div>
                            <hr />
                            <ServicesLinesGroups
                                indexServiceLine={index} {...{
                                    control,
                                    register, getValues, setValue, errors
                                }}
                            />
                        </div>
                    );
                })}
                <hr />
                <Button type="button" onPress={() => {
                    //append({ id: '' });
                    setValue("commercial_offers_services_lines",[
                        ...getValues().commercial_offers_services_lines,
                        { line_id: '',id:'',commercial_offers_services_groups:[]
                        
                    }
                    ])
            }}>
                    append LineService
                </Button>
            </div>
        </div>
    )
}
