import {  Grid } from "@nextui-org/react"
import { FC } from "react"
import { FavoriteCardPokemon } from './';

interface Props {
    favoritesPokemons: number[]
  }

export const FavoritePokemons: FC<Props> = ({favoritesPokemons}) => {
  return (
    <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
          {
            favoritesPokemons.map( ( id: number ) => (
              <FavoriteCardPokemon pokemonId={ id } key={ id }/>
            ))
          }
        </Grid.Container>
  )
}
