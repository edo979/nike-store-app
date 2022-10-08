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
      <Col
        md={6}
        lg={5}
        className={`${isImageLeft ? 'order-1 mt-3 mt-md-0' : 'order-0'}`}
      >
        <p className=" mb-0 fw-bold text-primary fs-2">{heading}</p>
        <h2 className="display-6 fw-bold">{title}</h2>
        <p>{text}</p>
        <Button variant="dark">{btn}</Button>
      </Col>

      <Col
        md={6}
        lg={7}
        className={`${isImageLeft ? 'order-0' : 'order-1 mt-3 mt-md-0'}`}
      >
        <img src={img} alt={title} className="img-fluid" />
      </Col>
    </>
  )
}
