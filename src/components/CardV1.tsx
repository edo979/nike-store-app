import { Card, Row, Col } from 'react-bootstrap'

type CardV1Props = {
  title: string
  text: string
  rating: string
  img: string
}

export function CardV1({ title, text, rating, img }: CardV1Props) {
  return (
    <Card className="bg-primary text-white h-100">
      <Row>
        <Col xs={6} style={{ zIndex: '1' }}>
          <Card.Body>
            <Card.Title className="mb-0">
              <h3 className="fs-6 text-nowrap mb-0">{title}</h3>
            </Card.Title>
            <Card.Text className="fs-6 text-nowrap">{text}</Card.Text>
          </Card.Body>
        </Col>
        <Col xs={6}>
          <Card.Img src={img} alt={title} style={{ rotate: '-30deg' }} />
        </Col>
      </Row>
    </Card>
  )
}
