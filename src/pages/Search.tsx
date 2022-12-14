import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CardV1List } from '../components/cards/CardV1List'
import { shoes, Shoe } from '../data/shoes'

export function Search() {
  const search = useRef<HTMLInputElement>(null)
  const [products, setProducts] = useState<Shoe[]>([])
  const [isFindProduct, setIsFindProducts] = useState<boolean>(true)

  const searchProducts = (value: string): void => {
    const productsFind = shoes.filter((products) =>
      products.title.toLowerCase().includes(value.toLowerCase())
    )

    if (productsFind.length === 0) {
      setIsFindProducts(false)
    } else {
      setIsFindProducts(true)
      setProducts(productsFind)
    }
  }

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

      <section className="row" id="search" style={{ marginTop: '100px' }}>
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

      {isFindProduct ? (
        <section className="my-4">
          {products.length > 0 && <h2>Results:</h2>}
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
            {products.map(({ id, title, img, text }) => (
              <div className="col" key={id}>
                <div className="card h-100">
                  <img src={img} className="card-img-top" alt={title} />
                  <div className="card-body d-flex flex-column">
                    <h3 className="card-title fs-4 mt-auto">{title}</h3>
                    <p className="card-text">{text}</p>
                    <Link
                      to={`/products/${id}`}
                      className="btn btn-outline-dark"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div className="row">
          <div className="col">
            <div className="alert alert-danger my-4 fs-3 text-center">
              No results.
            </div>
          </div>
        </div>
      )}

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
