import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
  Title,
} from './styles'
import tradicionalCoffee from '../../../../../public/coffeesImage/tradicional.svg'
import { QuantityInput } from '../../../../components/Quantityinput'
import { Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { CartContext, CartItem } from '../../../../contexts/CartContexts'
import { formatMoney } from '../../../../utils/formatMoney'
import { useContext } from 'react'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useContext(CartContext)
  const { colors } = useTheme()

  const coffeeTotal = coffee.price * coffee.quantity
  const formatedPrice = formatMoney(coffeeTotal)

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemoveCoffeeCart() {
    removeCartItem(coffee.id)
  }

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`${coffee.src}`} alt="" />

        <div>
          <Title>{coffee.title}</Title>
          <ActionsContainer>
            <QuantityInput
              size="small"
              quantity={coffee.quantity}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
            />
            <RemoveButton onClick={handleRemoveCoffeeCart}>
              <Trash size={16} color={`${colors['brand-purple']}`} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formatedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
