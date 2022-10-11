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
  removeItem: (id: string) => void
  totalItems: number
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
          if (item.id === id) return { ...item, amount: item.amount + 1 }
          return item
        })
      } else {
        return [...storeItems, { id, amount: 1 }]
      }
    })
  }
  const removeItem = (id: string): void => {
    setCartItems((storeItems) => {
      if (storeItems.find((item) => item.id === id && item.amount > 1)) {
        return storeItems.map((item) =>
          item.id === id ? { id, amount: item.amount - 1 } : item
        )
      } else {
        return storeItems.filter((item) => item.id !== id)
      }
    })
  }

  const totalItems = cartItems.reduce((acc, item) => acc + item.amount, 0)

  return (
    <CartContext.Provider
      value={{
        openCart,
        closeCart,
        cartItems,
        addItem,
        removeItem,
        totalItems,
      }}
    >
      {children}
      <Cart isOpen={isOpen} />
    </CartContext.Provider>
  )
}
