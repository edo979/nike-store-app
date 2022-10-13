import { ButtonBack } from '../components/ButtonBack'

export function ErrorPage() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col d-flex align-items-stretch gap-3">
          <ButtonBack />
          <a
            href="/"
            className="btn btn-outline-secondary btn-lg d-flex align-items-center"
          >
            Home
          </a>
          <span className="alert alert-danger fs-4 mb-0 px-4 w-100">
            Error, page not found
          </span>
        </div>
      </div>
    </div>
  )
}
