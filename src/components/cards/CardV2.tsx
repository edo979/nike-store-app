import { Card, Row, Col } from 'react-bootstrap'
import { CardDetails } from './CardDetails'

type CardV1Props = {
  title: string
  text: string
  rating: string
  price: string
  btn: string
  img: string
  color1?: string
  color2?: string
}

export function CardV2({
  title,
  text,
  rating,
  price,
  btn,
  img,
  color1,
  color2,
}: CardV1Props) {
  const colors = {
    '--clr-top-card-v1': color1,
    '--clr-bottom-card-v1': color2,
  } as React.CSSProperties

  return (
    <Card className="card-v2 | text-white h-100" style={{ ...colors }}>
      <Card.Body className="text-nowrap">
        <Card.Title className="mb-0">
          <h3 className="fs-6 mb-0">{title}</h3>
        </Card.Title>

        <Card.Text as={'div'}>
          <p className="mb-0 fs-6">{text}</p>

          <CardDetails price={price} rating={rating} btn={btn} />
        </Card.Text>
      </Card.Body>

      <Card.Img src={img} alt={title} />
    </Card>
  )
}
