import { Col, Image, Offcanvas, Row, Stack } from 'react-bootstrap'
import { useCart } from '../context/CartContext'
import { shoes } from '../data/shoes'
import { CartItem } from './CartItem'

type CartProps = {
  isOpen: boolean
}

export function Cart({ isOpen }: CartProps) {
  const { closeCart, cartItems } = useCart()

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement={'end'}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={2}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
