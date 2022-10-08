import { Col } from 'react-bootstrap'
import { shoes } from '../../data/shoes'
import { CardV1 } from './CardV1'

export function CardV1List() {
  return (
    <>
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
    </>
  )
}
