import { useState } from 'react'
import { CardGroup } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { CarouselItem } from './CarouselItem'
import { news, News } from '../data/shoes'

function chunks(arr: News[], size = 2): (false | News[])[] {
  return arr.map((x, i) => i % size == 0 && arr.slice(i, i + size))
}

export function CarouselBs() {
  const [index, setIndex] = useState<number>(0)

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <div className="d-md-none my-5">
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

      <div className="d-none d-md-block d-lg-none my-5">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          variant="dark"
          className="pb-5 mb-2"
        >
          {chunks(news).map((items, i) => {
            if (items) {
              return (
                <Carousel.Item key={items ? items[0].title : i}>
                  <CardGroup>
                    <CarouselItem {...items[0]} />
                    <CarouselItem {...items[1]} />
                  </CardGroup>
                </Carousel.Item>
              )
            }
            return undefined
          })}
        </Carousel>
      </div>

      <div className="d-none d-lg-block d-xl-none my-5">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          variant="dark"
          className="pb-5 mb-2"
        >
          {chunks(news, 3).map((items, i) => {
            if (items) {
              return (
                <Carousel.Item key={items ? items[0].title : i}>
                  <CardGroup>
                    <CarouselItem {...items[0]} />
                    <CarouselItem {...items[1]} />
                    <CarouselItem {...items[2]} />
                  </CardGroup>
                </Carousel.Item>
              )
            }
            return undefined
          })}
        </Carousel>
      </div>

      <div className="d-none d-xl-block my-5">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          variant="dark"
          className="pb-5 mb-2"
        >
          {chunks(news, 4).map((items, i) => {
            if (items) {
              return (
                <Carousel.Item key={items ? items[0].title : i}>
                  <CardGroup>
                    <CarouselItem {...items[0]} />
                    <CarouselItem {...items[1]} />
                    <CarouselItem {...items[2]} />
                    <CarouselItem {...items[3]} />
                  </CardGroup>
                </Carousel.Item>
              )
            }
            return undefined
          })}
        </Carousel>
      </div>
    </>
  )
}
