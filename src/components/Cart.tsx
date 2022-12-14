import { Offcanvas, Stack } from 'react-bootstrap'
import { useCart } from '../context/CartContext'
import { shoes } from '../data/shoes'
import { CartItem } from './CartItem'

type CartProps = {
  isOpen: boolean
}

export function Cart({ isOpen }: CartProps) {
  const { closeCart, cartItems } = useCart()

  const prices = cartItems.map((cartItem) => {
    const shoe = shoes.find((s) => s.id === cartItem.id)
    if (shoe) return parseFloat(shoe.price) * cartItem.amount
    return 0
  })

  const total = prices.reduce((acc, price) => (acc = acc + price), 0)

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement={'end'}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          Total: <span className="fw-bolder fs-4">${total}</span>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="border-top border-2 position-relative">
        {total === 0 && <div className="offcanvas_bg-image"></div>}
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
