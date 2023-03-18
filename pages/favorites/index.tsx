import { useEffect, useState } from 'react';

import { Layout } from '@/components/layouts'
import { NoFavorites } from '@/components/ui'
import { localFavorites } from '@/utils';
import { Card, Grid } from '@nextui-org/react';
import { FavoritePokemons } from '@/components/pokemon';


const FavoritesPage = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritesPokemons( localFavorites.pokemons() )
  }, [])
  

  return (
    <Layout title='Pokemons - Favoritos'>

    {
      favoritesPokemons.length === 0
      ? ( <NoFavorites/> )
      : ( <FavoritePokemons favoritesPokemons={ favoritesPokemons }/> )
    }

    </Layout>
  )
}

export default FavoritesPage