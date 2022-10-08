import { Row, Col } from 'react-bootstrap'
import { shoes } from '../data/shoes'
import { CardV1 } from './CardV1'

export function CardV1List() {
  return (
    <Row xs={1} sm={2} lg={3} className="g-4 g-sm-3 g-md-4">
      {shoes.map((s) => {
        if (s.id.includes('p')) {
          return (
            <Col key={s.id}>
              <CardV1 {...s} />
            </Col>
          )
        }
        return undefined
      })}
    </Row>
  )
}
