import { useState } from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { news } from '../data/shoes'

export function CarouselBs() {
  const [index, setIndex] = useState<number>(0)

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <div className="d-sm-none">
        <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
          {news.map(({ title, text, img, time }) => (
            <Carousel.Item key={title}>
              <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated {time} ago</small>
                </Card.Footer>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  )
}
