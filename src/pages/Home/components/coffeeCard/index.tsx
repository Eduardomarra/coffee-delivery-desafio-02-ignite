import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../../components/Quantityinput'
import {
  CoffeeCardContainer,
  Name,
  Tags,
  Description,
  CardFooter,
  AddCartWrapper,
} from './styles'
import { formatMoney } from '../../../../utils/formatMoney'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContexts'

export interface Coffee {
  id: number
  src: string
  tag: string[]
  title: string
  description: string
  price: number
}

interface CoffeeCardProps {
  coffee: Coffee
}

export function Coffeecard({ coffee }: CoffeeCardProps) {
  const { addCoffeeToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  const formatedPrice = formatMoney(coffee.price)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const coffeeToCart = {
      ...coffee,
      quantity,
    }

    addCoffeeToCart(coffeeToCart)
  }

  return (
    <CoffeeCardContainer>
      <img src={coffee.src} alt="" />
      <Tags>
        {coffee.tag.map((tags) => (
          <span key={`${coffee.id}${tags}`}>{tags}</span>
        ))}
      </Tags>
      <Name>{coffee.title}</Name>
      <Description>{coffee.description}</Description>
      <CardFooter>
        <div>
          <p>R$</p>
          <strong>{formatedPrice}</strong>
        </div>
        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
