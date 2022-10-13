import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CardV1List } from '../components/cards/CardV1List'
import { useCart } from '../context/CartContext'
import { shoes } from '../data/shoes'

export function Search() {
  const { addItem } = useCart()
  const navigate = useNavigate()
  const search = useRef<HTMLInputElement>(null)

  const searchProducts = (value: string): void => {
    console.log(value)
  }

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

      <section className="row" style={{ marginTop: '100px' }}>
        <form
          className="d-flex"
          role="search"
          onSubmit={(e) => {
            e.preventDefault()
            if (search.current == null || search.current.value === '') return
            searchProducts(search.current.value)
          }}
        >
          <input
            className="form-control form-control-lg px-2 me-2 w-100 "
            type="search"
            placeholder="Search..."
            aria-label="Search"
            ref={search}
          />
          <button className="btn btn-primary px-4" type="submit">
            Search
          </button>
        </form>
      </section>

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
