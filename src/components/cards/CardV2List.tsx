import { Col } from 'react-bootstrap'
import { shoes } from '../../data/shoes'
import { CardV2 } from './CardV2'

export function CardV2List() {
  return (
    <>
      {shoes.map((s) => {
        if (s.id.includes('M')) {
          return (
            <Col key={s.id}>
              <CardV2 {...s} />
            </Col>
          )
        }
        return undefined
      })}
    </>
  )
}
