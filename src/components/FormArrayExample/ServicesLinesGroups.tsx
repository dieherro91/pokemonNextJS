import { Button, Input } from '@nextui-org/react';
import React, { FC } from 'react'
import { Controller, useFieldArray } from 'react-hook-form';
import { ServicesLinesGroupsInterface } from './interfaces'
import { ServicesLinesGroupsServices } from './ServicesLinesGroupsServices';

export const ServicesLinesGroups: FC<ServicesLinesGroupsInterface> = ({
    indexServiceLine, control, register, getValues, setValue, errors }) => {
    const { fields, remove, append } = useFieldArray({
        control,
        name: `commercial_offers_services_lines.${indexServiceLine}.commercial_offers_services_groups`
    });
    return (
        <div>
            {fields.map((ServicesLineGroup, indexGroup) => {
                return (
                    <div key={ServicesLineGroup.id}>

                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{
                                width: '500px',
                                display: 'flex', flexDirection: 'row', justifyContent: 'space-between'
                            }}>

                                <label >
                                    ID group
                                </label>
                                <Input
                                    defaultValue={ServicesLineGroup.id}
                                    {...register(`commercial_offers_services_lines.${indexServiceLine}.commercial_offers_services_groups.${indexGroup}.group_id`, { required: true, maxLength: 20 })}
                                />
                            </div>
                            <Button type="button" onPress={() => remove(indexGroup)}>
                                remove group
                            </Button>
                        </div>
                        <hr />
                        <ServicesLinesGroupsServices
                            indexServiceLine={indexServiceLine}
                            indexServiceLineGroup={indexGroup}
                            {...{ control, register, getValues, setValue, errors }}
                        />

                    </div>
                );
            })}
            <hr />
            <Button type="button" onPress={() => { 
                //append({ id: '' });
                setValue(`commercial_offers_services_lines.${indexServiceLine}.commercial_offers_services_groups`,
                [...getValues().commercial_offers_services_lines[indexServiceLine].commercial_offers_services_groups
                ,{group_id:'',id:'',commercial_offers_services:[]}
            ]
                )
                }}>
                add group
            </Button>
            <hr />

        </div>
    )
}
