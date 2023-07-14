import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { HeaderContainer, HeaderButtonWrapper, HeaderButton } from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContexts'

export function Header() {
  const { cartQuantity } = useContext(CartContext)

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logo} alt="logo Coffe Delivery" />
        </NavLink>
        <HeaderButtonWrapper>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Brasília, DF
          </HeaderButton>
          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              {cartQuantity > 0 ? <span>{cartQuantity}</span> : ''}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonWrapper>
      </div>
    </HeaderContainer>
  )
}
