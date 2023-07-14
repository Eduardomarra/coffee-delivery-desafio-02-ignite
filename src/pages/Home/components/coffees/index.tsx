import { coffees } from '../../../../data/coffees'
import { Coffeecard } from '../coffeeCard'
import { Coffeelist, CoffeesContainer, CoffeeTitleText } from './styles'

export function Coffees() {
  return (
    <CoffeesContainer className="container">
      <CoffeeTitleText>Nossos cafés</CoffeeTitleText>
      <Coffeelist>
        {coffees.map((coffee) => (
          <Coffeecard key={coffee.id} coffee={coffee} />
        ))}
      </Coffeelist>
    </CoffeesContainer>
  )
}
