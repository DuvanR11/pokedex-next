import { useState } from 'react';

import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti'

import { Layout } from "@/components/layouts"
import { PokemonFull } from '@/interfaces';
import { pokeApi } from '@/api';
import { getPokemonInfo, localFavorites } from '@/utils';

interface Props {
  pokemon: PokemonFull
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

 const [isInfavorites, setIsInfavorites] = useState( localFavorites.existInfavorites( pokemon.id ) )

 const onToggleFavorite = () => {
  localFavorites.togglesFavorites( pokemon.id )
  setIsInfavorites( !isInfavorites )

  if ( isInfavorites ) return

  confetti({
    zIndex: 999,
    particleCount: 100,
    angle: -100,
    origin: {
      x: 0.9,
      y: 0
    }
  })
 }

  return (
    <Layout title={ pokemon.name }>
        <Grid.Container css={{ marginTop:'5px' }} gap={ 2 }>
          <Grid xs={ 12 } sm={ 4 }>
            <Card isHoverable css={{ padding: '30px' }}>
              <Card.Body>
                <Card.Image
                  src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                  alt={ pokemon.name }
                  width='100%'
                  height={ 200 }
                />
              </Card.Body>
            </Card>
          </Grid>

          <Grid xs={ 12 } sm={ 8 }>
            <Card>
              <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text h1 transform='capitalize'>{pokemon.name}</Text>

                <Button
                  color='gradient'
                  ghost={ !isInfavorites }
                  onPress={ onToggleFavorite }
                  >
                    { isInfavorites ? 'En favoritos' : 'Guardar en favoritos' }
                </Button>

              </Card.Header>

              <Card.Body>
                <Text size={ 30 }>Sprites:</Text>

                <Container direction='row' display='flex' gap={ 0 }>
                  <Image
                    src={ pokemon.sprites.front_default }
                    alt={ pokemon.name }
                    width={ 100 }
                    height={ 100 }
                  />
                   <Image
                    src={ pokemon.sprites.back_default }
                    alt={ pokemon.name }
                    width={ 100 }
                    height={ 100 }
                  />
                  <Image
                    src={ pokemon.sprites.front_shiny }
                    alt={ pokemon.name }
                    width={ 100 }
                    height={ 100 }
                  />
                   <Image
                    src={ pokemon.sprites.back_shiny }
                    alt={ pokemon.name }
                    width={ 100 }
                    height={ 100 }
                  />
                </Container>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
    </Layout>
  )
}



export const getStaticPaths: GetStaticPaths = async (ctx) => { 

  const pokemon200 = [...Array(200)].map( ( value, index ) => `${ index + 1 }`);

  return {
    paths: pokemon200.map( id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { id } = params as { id: string };


  return {
    props: {
      pokemon: await getPokemonInfo( id )
    }, 
  }
}

export default PokemonPage