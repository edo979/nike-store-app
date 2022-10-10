import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useCart } from '../context/CartContext'
import { useScrollPosition } from '../hooks/useScrollPosition'

export function MainNavigation() {
  const scrollPosition = useScrollPosition()
  const { openCart } = useCart()

  return (
    <Navbar expand="sm" sticky={scrollPosition > 30 ? 'top' : undefined}>
      <Container>
        <Navbar.Brand href="#home">
          <img src="/assets/logo.png" width={60} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto"></Nav>

          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
            </svg>
          </Button>

          <Button onClick={openCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
