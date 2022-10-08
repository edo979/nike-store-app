import { Button, Col, Container, Image, Row, Stack } from 'react-bootstrap'

import { CardV1List } from '../components/CardV1List'
import { Jumbotron } from '../components/Jumbotron'
import { MainNavigation } from '../components/MainNavigation'
import { homeArticles } from '../data/shoes'

export function Home() {
  return (
    <>
      <header>
        <MainNavigation />
        <div className="clip-path"></div>

        <Container className="hero | mt-5 pb-5">
          <Stack gap={5} className="col-sm-8 mx-auto">
            <h1 className="text-light text-center display-4">
              Play With Electric Nike Adapt 2.0 Sneakers
            </h1>
            <Button
              variant="light"
              size="lg"
              className="mx-auto shadow z-index-3"
            >
              Explore product
            </Button>
            <Image src="/assets/hero.png" />
          </Stack>
        </Container>
      </header>

      <main>
        <Container className="">
          <Row className="my-2 mt-lg-5">
            <Col>
              <h2>Popular Sales</h2>
            </Col>
          </Row>

          <Row xs={1} sm={2} lg={3} className="g-4 g-sm-3 g-md-4">
            <CardV1List />
          </Row>

          <Row xs={2} className="mt-5">
            <Jumbotron {...homeArticles[0]} variant="img-left" />
          </Row>
        </Container>
      </main>
    </>
  )
}
