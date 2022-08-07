import { Button } from '@nextui-org/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import { TitleContext } from '../context/title.context'
import { ContextTitleValuesInterface, titleContextType } from '../src/models/ContextModel'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { changeTitle } = useContext<titleContextType>(TitleContext);
  changeTitle('Home-PokémonApp');
  
  return (
    <div>
      <h1>halsd</h1>
    </div>
  )
}

export default Home
