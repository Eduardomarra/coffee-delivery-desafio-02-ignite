import { useContext } from 'react'
import { CoffeeCartCard } from '../coffeeCartCard'
import { ConfirmationSection } from './ConfirmatioSection'
import {
  DetailsContainer,
  SelectedCoffeesContainer,
  TitleOrder,
} from './styles'
import { CartContext } from '../../../../contexts/CartContexts'

export function SelectedCoffees() {
  const { cartItens } = useContext(CartContext)
  return (
    <SelectedCoffeesContainer>
      <TitleOrder>Cafés selecionados</TitleOrder>
      <DetailsContainer>
        {cartItens.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
