import { Row, Col, Image, Container } from 'react-bootstrap'
import { shoes } from '../data/shoes'

type CartItemProps = {
  id: string
  amount: number
}

export function CartItem({ id, amount }: CartItemProps) {
  const item = shoes.find((item) => item.id === id)
  if (item == null) return null

  return (
    <Container>
      <Row className="bg-light p-2 rounded-2">
        <Col>
          <Image src={item.img} height={80} className="mx-auto d-block" />
        </Col>

        <Col className="d-flex align-items-center">
          <div className="mx-auto">
            <h2 className="fs-6">{item.title}</h2>
            <strong>${item.price}</strong>
            {amount && (
              <span>
                <span className="text-muted"> x {amount} = </span>
                <strong>${parseFloat(item.price) * amount}</strong>
              </span>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  )
}
