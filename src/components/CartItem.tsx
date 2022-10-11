import { Image, Stack, Button } from 'react-bootstrap'
import { useCart } from '../context/CartContext'
import { shoes } from '../data/shoes'

type CartItemProps = {
  id: string
  amount: number
}

export function CartItem({ id, amount }: CartItemProps) {
  const { addItem, removeItem } = useCart()
  const item = shoes.find((item) => item.id === id)
  if (item == null) return null

  return (
    <Stack className="bg-light rounded-2 p-2 shadow-sm" direction="horizontal">
      <Image src={item.img} width={95} />

      <div className="ms-auto">
        <h2 className="fs-6 m-0">{item.title}</h2>
        <div className="text-end">
          <strong>${item.price}</strong>
          {amount > 1 && (
            <span>
              <span className="text-muted"> x {amount} = </span>
              <strong>${parseFloat(item.price) * amount}</strong>
            </span>
          )}
        </div>
        <div className="mt-1 text-end">
          <Button
            size="sm"
            className="py-0 px-2"
            variant="outline-dark"
            onClick={() => removeItem(id)}
          >
            &#8211;
          </Button>
          <span> amount </span>
          <Button
            size="sm"
            className="py-0 px-2"
            variant="outline-dark"
            onClick={() => addItem(id)}
          >
            +
          </Button>
        </div>
      </div>
    </Stack>
  )
}
