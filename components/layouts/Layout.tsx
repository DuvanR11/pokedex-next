import { FC, ReactNode  } from 'react'

import Head from 'next/head'

import { NavBar } from '../ui'

interface Props {
    title?: string
    children: ReactNode
}

const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
    <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name='author' content='Duvan Rivera'/>
        <meta name="description" content={`Informacion sobre ${ title }`}/>
        <meta name="Keywords" content={`${ title }, pokemon, pokedex`}/>

        <meta property="og:title" content={`Informacion sobre ${ title }`} />
        <meta property="og:description" content={`Esta es la informacion sobre ${ title }`} />
        <meta property="og:image" content={`${ origin }/img/banner.png`} />
    </Head>
    
    <NavBar/>

    <main style={{
        padding: '0px 20px'
    }}>
        { children }
    </main>
    </>
  )
}
