import { NavLink } from 'react-router-dom'
import { ConfirmationButton, ConfirmationSectionContainer } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContexts'
import { formatMoney } from '../../../../utils/formatMoney'

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useContext(CartContext)

  const delivery = 3.7
  const totalCoffee = cartItemsTotal + delivery

  const formatedPrice = formatMoney(cartItemsTotal)
  const formatedPriceTotal = formatMoney(totalCoffee)
  const formatedPriceDelivery = formatMoney(delivery)

  return (
    <ConfirmationSectionContainer>
      <div>
        <span>Total de Itens</span>
        <span>R$ {formatedPrice}</span>
      </div>
      <div>
        <span>Entrega</span>
        <span>{cartQuantity <= 0 ? '0,00' : formatedPriceDelivery}</span>
      </div>
      <div className="strong">
        <span>
          <strong>Total de Itens</strong>
        </span>
        <span>
          <strong>R$ {cartQuantity <= 0 ? '0,00' : formatedPriceTotal}</strong>
        </span>
      </div>
      {/* <NavLink to={'/confirmedOrder'}> */}
      <ConfirmationButton disabled={cartQuantity <= 0} type="submit">
        Confirmar Pedido
      </ConfirmationButton>
      {/* </NavLink> */}
    </ConfirmationSectionContainer>
  )
}
