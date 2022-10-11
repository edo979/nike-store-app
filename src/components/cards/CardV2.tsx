import { Card, Row, Col } from 'react-bootstrap'
import { CardDetails } from './CardDetails'

type CardV1Props = {
  id: string
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
  id,
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
    '--clr-top-card': color1,
    '--clr-bottom-card': color2,
  } as React.CSSProperties

  return (
    <Card className="card-v2 | text-white h-100" style={{ ...colors }}>
      <Card.Body className="text-sm-center text-end pb-0">
        <Card.Title className="mb-0">
          <h3 className="fs-6 mb-0">{title}</h3>
        </Card.Title>

        <Card.Text as={'div'}>
          <p className="mb-0 fs-6">{text}</p>

          <CardDetails
            id={id}
            price={price}
            rating={rating}
            btn={btn}
            center={true}
          />
        </Card.Text>
      </Card.Body>

      <Card.Img src={img} alt={title} />
    </Card>
  )
}
