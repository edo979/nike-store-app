import { Button, Col, Container, Image, Row, Stack } from 'react-bootstrap'
import { CardV1List } from '../components/cards/CardV1List'
import { CardV2List } from '../components/cards/CardV2List'
import { CarouselBs } from '../components/CarouselBs'
import { Jumbotron } from '../components/Jumbotron'
import { homeArticles } from '../data/shoes'

export function Home() {
  return (
    <>
      <header>
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

      <Container>
        <main>
          <Row className="my-2 mt-lg-5">
            <Col>
              <h2>Popular Sales</h2>
            </Col>
          </Row>

          <Row xs={1} sm={2} lg={3} className="g-4 g-sm-3 g-md-4">
            <CardV1List />
          </Row>

          <Row className="mt-5 align-items-center bg-light p-5 rounded-3">
            <Jumbotron {...homeArticles[0]} variant="img-left" />
          </Row>

          <Row className="my-4">
            <Col>
              <h2>Top Radted Sales</h2>
            </Col>
          </Row>

          <Row xs={1} sm={2} lg={4} className="g-4 g-sm-3 g-md-4">
            <CardV2List />
          </Row>

          <Row className="mt-5 align-items-center bg-light p-5 rounded-3">
            <Jumbotron {...homeArticles[1]} />
          </Row>

          <Row className="mt-5">
            <CarouselBs />
          </Row>
        </main>

        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mt-4 border-top bg-light">
          <div className="col mb-3 px-5">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <img
                src="/assets/logo.png"
                width={60}
                style={{ filter: 'brightness(0)' }}
              />
            </a>
            <p className="text-muted">© {new Date().getFullYear()}</p>
          </div>

          <div className="col mb-3"></div>

          <div className="col mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </Container>
    </>
  )
}
