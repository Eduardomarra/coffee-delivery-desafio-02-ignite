import { Intro } from './components/intro'
import { Coffees } from './components/coffees'

import { HomeContainer } from './styles'
import { CartContext } from '../../contexts/CartContexts'
import { useContext } from 'react'

export interface BackgroundProps {
  background: 'yellow-dark' | 'yellow' | 'purple' | 'base-text'
}

interface CoffeeCart {
  id: number
  src: string
  tag: string
  title: string
  description: string
  price: string
}

interface Cart {
  cart: CoffeeCart[]
}

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <Coffees />
    </HomeContainer>
  )
}
