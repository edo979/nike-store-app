import { useState } from 'react'
import { Button, Card, CardGroup, Stack } from 'react-bootstrap'
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
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          variant="dark"
          className="pb-5 mb-2"
        >
          {news.map(({ title, text, img, time, btn, by, like }) => (
            <Carousel.Item key={title}>
              <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Button>{btn}</Button>
                </Card.Body>
                <Card.Footer>
                  <Stack
                    direction="horizontal"
                    className="justify-content-between"
                  >
                    <Stack
                      direction="horizontal"
                      className="align-items-start"
                      gap={2}
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width={16}
                          height={16}
                        >
                          <path d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z" />
                        </svg>
                      </div>
                      <Stack>
                        <span className="text-muted">Last updated:</span>
                        <span>{time} ago</span>
                      </Stack>
                    </Stack>

                    <Stack
                      direction="horizontal"
                      className="align-items-start"
                      gap={2}
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width={16}
                          height={16}
                        >
                          <path d="M256 112c-48.6 0-88 39.4-88 88C168 248.6 207.4 288 256 288s88-39.4 88-88C344 151.4 304.6 112 256 112zM256 240c-22.06 0-40-17.95-40-40C216 177.9 233.9 160 256 160s40 17.94 40 40C296 222.1 278.1 240 256 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zM416.2 388.5C389.2 346.3 343.2 320 291.8 320H220.2c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208C464 306.3 446 352.5 416.2 388.5z" />
                        </svg>
                      </div>
                      <Stack>
                        <span className="text-muted">By: {by}</span>
                        <span>Like: {like}</span>
                      </Stack>
                    </Stack>
                  </Stack>
                </Card.Footer>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  )
}
