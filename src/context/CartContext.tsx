import { createContext, ReactNode, useContext, useState } from 'react'
import { Cart } from '../components/Cart'

type CartProviderProps = {
  children: ReactNode
}

type CartContext = {
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext({} as CartContext)

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }: CartProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  return (
    <CartContext.Provider
      value={{
        openCart,
        closeCart,
      }}
    >
      {children}
      <Cart isOpen={isOpen} />
    </CartContext.Provider>
  )
}
