import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { shoes } from '../data/shoes'

export function ProductPage() {
  const { id } = useParams()
  const product = shoes.find((i) => i.id === id)
  const { openCart, addItem } = useCart()
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
      <div
        className="container col-xxl-8 px-4 py-5"
        style={{ marginTop: '100px' }}
      >
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
                onClick={openCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  width={24}
                  height={24}
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                    clipRule="evenodd"
                  ></path>
                </svg>{' '}
                Open Cart
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
                onClick={() => addItem(product.id)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
