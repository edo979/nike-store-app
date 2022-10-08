import { Stack, Button } from 'react-bootstrap'

type CardDetailsProps = {
  price: string
  rating: string
  btn: string
  center: boolean
}

export function CardDetails({ price, rating, btn, center }: CardDetailsProps) {
  return (
    <Stack
      style={{ width: '100px' }}
      gap={1}
      className={`${center && 'mx-sm-auto ms-auto'} mt-2`}
    >
      <Stack direction="horizontal" className="justify-content-between">
        <span className="badge bg-light text-dark">${price} </span>
        <Stack direction="horizontal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            width={20}
            height={20}
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>{rating}</span>
        </Stack>
      </Stack>

      <Stack direction="horizontal" className="justify-content-between ">
        <Button variant="light" size="sm" className="py-0 px-0">
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
          </svg>
        </Button>

        <Button variant="light" size="sm" className="px-1 py-0 ">
          {btn}
        </Button>
      </Stack>
    </Stack>
  )
}
