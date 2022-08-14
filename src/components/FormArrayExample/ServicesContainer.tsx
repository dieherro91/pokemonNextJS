import React, { FC } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { defaultValuesOffer, OfferClient } from './interfaces'
import { ServicesLines } from './ServicesLines'
import { Button, Input } from '@nextui-org/react';
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaOfferClient } from './validationYup';




export const ServicesContainer: FC = () => {
  

  const {
    control,
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<OfferClient>({
    defaultValues: defaultValuesOffer,
    //resolver: yupResolver(schemaOfferClient)
  });
  const onSubmit = (data: OfferClient) => console.log("data", data);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <hr />
      <h1>Array de array de arrays</h1>
      <p>
        ejemplo
      </p>
      <Controller
        name='email'
        rules={{required:'cosas',pattern:{value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,message:'email no valido'}}}
        control={control}
        render={({ field }) => {
          console.log("field",field)
          return (<Input {...field} />)
        }}
      />
      <p>{errors.email?.message}</p>
      <br />
      <hr />
      <ServicesLines
        {...{
          control, register, getValues,
          setValue, errors
        }}
      />
      <hr />
      <Button type="button" onPress={() => reset(defaultValuesOffer)}>
        Reset
      </Button>

      <Button type='submit' >Submit</Button>
      <br />
    </form>
  )
}
