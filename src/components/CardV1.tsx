import { Card, Row, Col } from 'react-bootstrap'

type CardV1Props = {
  title: string
  text: string
  rating: string
  price: string
  img: string
  color1?: string
  color2?: string
}

export function CardV1({
  title,
  text,
  rating,
  price,
  img,
  color1,
  color2,
}: CardV1Props) {
  const colors = {
    '--clr-top-card-v1': color1,
    '--clr-bottom-card-v1': color2,
  } as React.CSSProperties

  return (
    <Card className="card-v1 | text-white h-100" style={{ ...colors }}>
      <Row>
        <Col xs={6} style={{ zIndex: '1' }}>
          <Card.Body>
            <Card.Title className="mb-0">
              <h3 className="fs-6 text-nowrap mb-0">{title}</h3>
            </Card.Title>

            <Card.Text className="fs-6 text-nowrap" as={'div'}>
              <p className="mb-0">{text}</p>
              <p>
                <span className="badge bg-light text-dark">${price} </span>
                <span> {rating}</span>
              </p>
            </Card.Text>
          </Card.Body>
        </Col>

        <Col xs={6}>
          <Card.Img src={img} alt={title} />
        </Col>
      </Row>
    </Card>
  )
}
