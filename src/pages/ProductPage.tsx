import { useNavigate, useParams } from 'react-router-dom'
import { CardV1List } from '../components/cards/CardV1List'
import { useCart } from '../context/CartContext'
import { shoes } from '../data/shoes'

export function ProductPage() {
  const { id } = useParams()
  const product = shoes.find((i) => i.id === id)
  const { addItem } = useCart()
  const navigate = useNavigate()
  if (product === undefined) return null

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
            <p className="lead">{product.text}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                className="btn btn-outline-secondary d-flex gap-2 align-items-center"
                onClick={() => navigate(-1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  height={18}
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
                Back
              </button>
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

      <div className="pb-5 row row-cols-xs-1 row-cols-sm-2 row-cols-lg-3 g-4 g-sm-3 g-md-4 ">
        <CardV1List />
      </div>
    </main>
  )
}
