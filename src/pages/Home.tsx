import { Button, Col, Container, Image, Row, Stack } from 'react-bootstrap'
import { MainNavigation } from '../components/MainNavigation'

export function Home() {
  return (
    <>
      <header>
        <MainNavigation />

        <Container className="mt-5 pb-5">
          <Stack gap={5} className="col-sm-8 mx-auto">
            <h1 className="text-bg-primary text-center display-4">
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
    </>
  )
}
