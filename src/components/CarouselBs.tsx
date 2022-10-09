import { useState } from 'react'
import { Button, Card, CardGroup, Stack } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { news } from '../data/shoes'
import { CarouselItem } from './CarouselItem'

export function CarouselBs() {
  const [index, setIndex] = useState<number>(0)

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <div className="d-sm-none">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          variant="dark"
          className="pb-5 mb-2"
        >
          {news.map((item) => (
            <Carousel.Item key={item.title}>
              <CarouselItem {...item} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  )
}
