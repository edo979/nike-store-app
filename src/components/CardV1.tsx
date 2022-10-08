import { Card, Row, Col } from 'react-bootstrap'

export function CardV1() {
  return (
    <Card className="bg-primary text-white">
      <Row>
        <Col xs={6} style={{ zIndex: '1' }}>
          <Card.Body>
            <Card.Title className="mb-0">
              <h3 className="fs-6 text-nowrap mb-0">Nike Addapt BB 2.0</h3>
            </Card.Title>
            <Card.Text className="fs-6 text-nowrap">
              MEN Running Shoes
            </Card.Text>
          </Card.Body>
        </Col>
        <Col xs={6}>
          <Card.Img
            src="/assets/nike-adapt-bb.png"
            alt="nike adapt bb"
            style={{ rotate: '-30deg' }}
          />
        </Col>
      </Row>
    </Card>
  )
}
