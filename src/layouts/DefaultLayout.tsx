import Head from "next/head"
import { FC, useContext, useEffect } from 'react';
import { TitleContext } from "../../context/title.context";
import { titleContextType } from "../../models/ContextModel";
import { LayoutInterface } from '../../models/LayoutModel';
import { Navbar } from "../ui";

export const DefaultLayout: FC<LayoutInterface> = ({ children }:LayoutInterface) => {
    const { title } = useContext<titleContextType>(TitleContext);
    return (
        <>
            <Head>
                <title>{title || 'PokémonApp'}</title>
                <meta name="autor" content="Diego Hernando Romero Roa" />
                <meta name="description" content="Información de los pokemons" />
                <meta name="keywords" content="pokemon, pokedex, pikachu" />
            </Head>
            <Navbar/>
            <main 
                style={{
                    padding:'0px 20px'
                }}
            >
                {children}
            </main>
        </>
    )
}
