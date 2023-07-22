import { Trash } from '@phosphor-icons/react'
import { useCoffeeContext } from '../../contexts/CoffeeContext'
import { RemoveCoffeeFromCartButton } from './styles'

interface ActionsCoffeeCardRemoveProps {
  coffeeId: number | string
}

export function ActionsCoffeeCardRemove({
  coffeeId,
}: ActionsCoffeeCardRemoveProps) {
  const { removeCoffeeFromCart } = useCoffeeContext()

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
