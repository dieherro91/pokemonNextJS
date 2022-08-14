import { Button, Input } from '@nextui-org/react';
import React, { FC } from 'react'
import { useFieldArray } from 'react-hook-form';
import { ServicesLinesGroupsServicesInterface } from './interfaces';

export const ServicesLinesGroupsServices: FC<ServicesLinesGroupsServicesInterface> = ({
  indexServiceLine, control, register, getValues,
  setValue, indexServiceLineGroup, errors }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `commercial_offers_services_lines.${indexServiceLine}.commercial_offers_services_groups.${indexServiceLineGroup}.commercial_offers_services`
  });
  return (
    <div>
      {fields.map((serviceLineGroupsService, indexServiceLineGroupService) => {

        return (
          <div key={serviceLineGroupsService.id} style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between'
          }}>
            <div>
              <div style={{
                width: '700px',
                display: 'flex', flexDirection: 'row', justifyContent: 'space-between'
              }}>
                <label >
                  ID SERVICE
                </label>
                <Input
                  defaultValue={serviceLineGroupsService.id}
                  {...register(`commercial_offers_services_lines.${indexServiceLine}.commercial_offers_services_groups.${indexServiceLineGroup}.commercial_offers_services.${indexServiceLineGroupService}.id`
                    , { required: true, maxLength: 20 })}
                />
              </div>
            </div>
            <Button type="button" onPress={() => remove(indexServiceLineGroupService)}>
              delete service
            </Button>
          </div>
        )
      })}
      <Button type="button" onPress={() => {
        //append({ id: '' });
        setValue(`commercial_offers_services_lines.${indexServiceLine}.commercial_offers_services_groups.${indexServiceLineGroup}.commercial_offers_services`,
          [
            ...getValues().commercial_offers_services_lines[indexServiceLine].commercial_offers_services_groups[indexServiceLineGroup].commercial_offers_services,
            {id:''}
          ]
        )
        }}>
        Add service
      </Button>
      <hr />
    </div>
  )
}
