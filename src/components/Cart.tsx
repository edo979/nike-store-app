import { Offcanvas } from 'react-bootstrap'
import { useCart } from '../context/CartContext'

type CartProps = {
  isOpen: boolean
}

export function Cart({ isOpen }: CartProps) {
  const { closeCart } = useCart()

  return (
    <>
      <Offcanvas show={isOpen} onHide={closeCart} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
