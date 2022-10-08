import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Stack,
} from 'react-bootstrap'
import { CardV1 } from '../components/CardV1'
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
              <CardV1 />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}
