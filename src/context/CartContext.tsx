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
  addItem: (id: string) => void
}

const CartContext = createContext({} as CartContext)

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }: CartProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const addItem = (id: string): void => {
    setCartItems((storeItems) => {
      if (storeItems.find((item) => item.id === id)) {
        return storeItems.map((item) => {
          if (item.id === id) return { ...item, amount: item.amount++ }
          return item
        })
      } else {
        return [...storeItems, { id, amount: 1 }]
      }
    })
  }

  return (
    <CartContext.Provider
      value={{
        openCart,
        closeCart,
        cartItems,
        addItem,
      }}
    >
      {children}
      <Cart isOpen={isOpen} />
    </CartContext.Provider>
  )
}
