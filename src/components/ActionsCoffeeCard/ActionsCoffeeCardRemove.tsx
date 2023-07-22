import { Trash } from '@phosphor-icons/react'
import { useDeliveriesContext } from '../../contexts/DeliveriesContext'
import { RemoveCoffeeFromCartButton } from './styles'

interface ActionsCoffeeCardRemoveProps {
  coffeeId: number | string
}

export function ActionsCoffeeCardRemove({
  coffeeId,
}: ActionsCoffeeCardRemoveProps) {
  const { removeCoffeeFromCart } = useDeliveriesContext()

  return (
    <RemoveCoffeeFromCartButton
      type="button"
      onClick={() => removeCoffeeFromCart(coffeeId)}
    >
      <Trash aria-hidden />
      Remover
    </RemoveCoffeeFromCartButton>
  )
}
