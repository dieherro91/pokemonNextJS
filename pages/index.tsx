import { useContext, useEffect } from 'react';
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { Grid } from '@nextui-org/react';

import { CardPokemon } from '../src/components';
import { pokeApi } from '../services';
import { PokemonListInterface, SmallPokemonInterface } from '../models/ServicesModel';
import { TitleContext } from '../context/title.context'
import { titleContextType } from '../models/ContextModel'

interface HomeProps {
  pokemons: SmallPokemonInterface[];
}

const HomePage: NextPage<HomeProps> = ({ pokemons }) => {
  const { changeTitle } = useContext<titleContextType>(TitleContext);
  useEffect(() => {
    changeTitle('PokémonApp');
  }, []);

  return (
    <div>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((pokemon, i: number) => {
          return (
            <CardPokemon 
              key={i+1}
              pokemon={pokemon}
            />
          )
        })}
      </Grid.Container>
    </div>
  )
}


// only at pages!!!!!!!!!!!!!!!!!!! 
// it excutes once at build time 
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListInterface>('/pokemon?limit=151') // your fetch function here 
  const Pokemons: SmallPokemonInterface[] = [];
  data.results.forEach((poke) => {
    Pokemons.push({
      ...poke,
      id: poke.url.split('https://pokeapi.co/api/v2/pokemon/')[1].split('/')[0],
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.url.split('https://pokeapi.co/api/v2/pokemon/')[1].split('/')[0]}.svg`,
    })
  })
  return {
    props: {
      pokemons: Pokemons
    }
  }
}


export default HomePage
