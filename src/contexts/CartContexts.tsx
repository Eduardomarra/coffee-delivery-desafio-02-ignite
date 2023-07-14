import { ReactNode, createContext, useEffect, useState } from 'react'
import { Coffee } from '../pages/Home/components/coffeeCard'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItens: CartItem[]
  cartQuantity: number
  cartItemsTotal: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCartItem: (cartItemId: number) => void
  removeCartItemsfromConfirmed: () => void
}

interface CartItemProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffeeDelivery:cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartItemProviderProps) {
  const [cartItens, setCartItens] = useState<CartItem[]>(() => {
    const storagedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)

    if (storagedCartItems) {
      return JSON.parse(storagedCartItems)
    }

    return []
  })

  const cartQuantity = cartItens.length

  const cartItemsTotal = cartItens.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeExistsInCart = cartItens.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newcart = produce(cartItens, (draft) => {
      if (coffeeExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItens(newcart)
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItens, (draft) => {
      const coffeeExistsInCart = cartItens.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItens(newCart)
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItens, (draft) => {
      const coffeeExistsInCart = cartItens.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
    })

    setCartItens(newCart)
  }

  function removeCartItemsfromConfirmed() {
    setCartItens([])
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItens))
  }, [cartItens])

  return (
    <CartContext.Provider
      value={{
        cartItens,
        cartQuantity,
        cartItemsTotal,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem,
        removeCartItemsfromConfirmed,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
