import React, { FC } from 'react'
import { useFieldArray, useForm, useWatch } from 'react-hook-form';
import { bodyObject, cosas2Interface } from '../../pages/pokemon/[id]';
import type { Control, FieldArrayWithId } from 'react-hook-form';
import { Button, Input } from '@nextui-org/react';
interface InsideArrayInterface {
    control: Control<bodyObject>,
    index: number,
    value: cosas2Interface
}

export const InsideArray: FC<InsideArrayInterface> = ({ control, index, value }) => {
    const data = useWatch({
        control,
        name: `cosas3.${index}`
    });
    const { register, handleSubmit } = useForm({
        defaultValues: value
      });
      const { fields, append, update } = useFieldArray({
        control,
        name: `cosas3.${index}.cosas4`
      });
    console.log("index-value", index, value)
    return (
        <div>
            <Button onClick={()=>append({id:'',cosa5:''})} >{`interno ${index}`}</Button>
{fields.map((field,indexIntern:number)=>{
    return(
        <div key={`cosasInter-${indexIntern}`}>
        <Input key={field.id}
            {...register(`cosas4.${indexIntern}.id`)}
        />
        <Input key={field.id}
            {...register(`cosas4.${indexIntern}.cosa5`)}
        />
        <Button
        type="button"
        onClick={handleSubmit((data) => {update(indexIntern, data);}
        )}
      ></Button>
        </div>
    )
})}
        
        </div>
    )
}
