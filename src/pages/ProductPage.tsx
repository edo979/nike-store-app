import { useParams } from 'react-router-dom'
import { shoes } from '../data/shoes'

export function ProductPage() {
  const { id } = useParams()
  const product = shoes.find((i) => i.id === id)
  if (product === undefined) return null

  return (
    <main className="product">
      <div
        className="position-absolute w-100 d-block, bg-primary"
        style={{
          top: '0',
          left: '0',
          height: '70px',
        }}
      ></div>
      <div className="container col-xxl-8 px-4 py-5 mt-4">
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
            <p className="lead">{product.text}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
