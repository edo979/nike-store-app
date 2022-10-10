import { createContext, ReactNode, useContext, useState } from 'react'
import { Cart } from '../components/Cart'

type CartItem = {
  id: string
  amount: number
}

type CartProviderProps = {
  children: ReactNode
}

type CartContext = {
  openCart: () => void
  closeCart: () => void
  cartItems: CartItem[]
}

const CartContext = createContext({} as CartContext)

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }: CartProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: '0p0x1', amount: 2 },
    { id: '0p0x2', amount: 1 },
    { id: '0p0x3', amount: 2 },
  ])

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  return (
    <CartContext.Provider
      value={{
        openCart,
        closeCart,
        cartItems,
      }}
    >
      {children}
      <Cart isOpen={isOpen} />
    </CartContext.Provider>
  )
}
