import { Button, Col } from 'react-bootstrap'

type JumbotronProps = {
  variant: string
  heading: string
  title: string
  text: string
  btn: string
  img: string
}
export function Jumbotron({
  variant,
  heading,
  title,
  text,
  btn,
  img,
}: JumbotronProps) {
  const isImageLeft = variant === 'img-left'

  return (
    <>
      <Col className={`${isImageLeft ? 'order-1' : 'order-0'}`}>
        <p className="mb-0 fw-bold text-primary fs-4">{heading}</p>
        <h2 className="fs-1 fw-bold">{title}</h2>
        <p>{text}</p>
        <Button variant="dark">{btn}</Button>
      </Col>

      <Col className={`${isImageLeft ? 'order-0' : 'order-1'}`}>
        <img src={img} alt={title} className="img-fluid" />
      </Col>
    </>
  )
}
