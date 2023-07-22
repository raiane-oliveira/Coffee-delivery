import { useDeliveriesContext } from '../../contexts/DeliveriesContext'
import { Coffee } from '../../reducers/deliveries/reducer'
import { CounterCoffeeCardInput } from './styles'

interface ActionsCoffeeCardCounterProps {
  coffee: Coffee
}

export function ActionsCoffeeCardCounter({
  coffee,
}: ActionsCoffeeCardCounterProps) {
  const { addNewCoffeeToCart } = useDeliveriesContext()

  function handleAddNewProductToCart(e: any, id: number) {
    addNewCoffeeToCart(id, Number(e.target.value))
  }

  return (
    <CounterCoffeeCardInput
      type="number"
      name=""
      min={0}
      placeholder="1"
      onChange={(e) => handleAddNewProductToCart(e, Number(coffee.id))}
      value={coffee.amountInShoppingCart}
    />
  )
}
