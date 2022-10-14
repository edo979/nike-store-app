import { useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ButtonBack } from '../components/ButtonBack'
import { CardV1List } from '../components/cards/CardV1List'
import { useCart } from '../context/CartContext'
import { shoes } from '../data/shoes'
import { ErrorPage } from './ErrorPage'

export function ProductPage() {
  const { id } = useParams()
  const product = shoes.find((i) => i.id === id)
  const { addItem } = useCart()
  if (product === undefined) return <ErrorPage />

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="product container">
      <div
        className="position-absolute w-100 d-block, bg-primary"
        style={{
          top: '0',
          left: '0',
          height: '70px',
        }}
      ></div>

      <div className="px-4 py-4 mt-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 mx-auto">
            <img
              src={product.img}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">{product.title}</h1>
            <p className="lead m-0">{product.text}</p>{' '}
            <p className="lead fw-bold">Price: ${product.price}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <ButtonBack />
              <button
                type="button"
                className="btn btn-primary btn-lg px-4"
                onClick={() => addItem(product.id)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-2">
        <div className="col">
          <h2>Popular Sales</h2>
        </div>
      </div>

      <div className="pb-5 row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 g-sm-3 g-md-4 ">
        <CardV1List />
      </div>
    </main>
  )
}
