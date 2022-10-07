import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Stack,
} from 'react-bootstrap'
import { MainNavigation } from '../components/MainNavigation'

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
        <Container>
          <Row className="my-4">
            <Col>
              <h2>Popular Sales</h2>
            </Col>
          </Row>
          <Row xs={1} sm={2} lg={3}>
            <Col>
              <Card className="bg-primary text-white">
                <Row>
                  <Col xs={6} style={{ zIndex: '1' }}>
                    <Card.Body>
                      <Card.Title className="mb-0">
                        <h3 className="fs-6 text-nowrap mb-0">
                          Nike Addapt BB 2.0
                        </h3>
                      </Card.Title>
                      <Card.Text className="fs-6 text-nowrap">
                        MEN Running Shoes
                      </Card.Text>
                    </Card.Body>
                  </Col>
                  <Col xs={6}>
                    <Card.Img
                      src="/assets/nike-adapt-bb.png"
                      alt="nike adapt bb"
                      style={{ rotate: '-30deg' }}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col>2</Col>
            <Col>3</Col>
          </Row>
        </Container>
      </main>
    </>
  )
}
