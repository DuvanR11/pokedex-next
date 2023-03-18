import React from 'react'

import Image from 'next/image'
import NextLink from 'next/link'

import { Spacer, Text, useTheme, Link } from '@nextui-org/react'

export const NavBar = () => {

  const { theme } = useTheme()

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 50px',
        backgroundColor: theme?.colors.gray100.value
    }}>

        <Image
            src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"}
            alt="Icono"
            width={70}
            height={70}
        />

        <NextLink href='/' passHref>
            <Text color='white' h3>Pokemon</Text>
        </NextLink>
        <Spacer css={{ flex: 1 }}/>

        <NextLink href='/favorites' passHref>
            <Text color='white'  style={{ marginRight: '18px' }}>Favoritos</Text>
        </NextLink>
    </div>
  )
}
