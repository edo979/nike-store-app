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
      <div className="d-md-none">
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

      <div className="d-none d-md-block">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          variant="dark"
          className="pb-5 mb-2"
        >
          {news
            .reduce(
              (result, value, index, sourceArray) =>
                index % 2 === 0
                  ? [...result, sourceArray.slice(index, index + 2)]
                  : result,
              []
            )
            .map((items) => (
              <Carousel.Item key={items[0].title}>
                <CardGroup>
                  <CarouselItem {...items[0]} />
                  <CarouselItem {...items[1]} />
                </CardGroup>
              </Carousel.Item>
            ))}
        </Carousel>
      </div>
    </>
  )
}
