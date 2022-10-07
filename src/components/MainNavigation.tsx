import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../assets/logo.png'

export function MainNavigation() {
  return (
    <Navbar expand="sm" className="mt-2 mb-4 py-0">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width={60} style={{ filter: 'brightness(0)' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto"></Nav>

          <Button variant="link" size="sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 512 512"
              color="#000000"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
            </svg>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}