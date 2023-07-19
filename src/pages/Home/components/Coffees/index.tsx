import { CoffeeExpresso } from '../../../../assets/coffees'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeesContainer, CoffeesGrid } from './styles'

interface Coffee {
  id: string
  tags: string[]
  name: string
  description: string
  price: string
  img: string
}

interface CoffeesList {
  coffees: Coffee[]
}

const coffeesList = [
  {
    id: new Date().getTime(),
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    img: CoffeeExpresso,
  },
  {
    id: new Date().getTime(),
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    img: CoffeeExpresso,
  },
  {
    id: new Date().getTime(),
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    img: CoffeeExpresso,
  },
  {
    id: new Date().getTime(),
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    img: CoffeeExpresso,
  },
  {
    id: new Date().getTime(),
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    img: CoffeeExpresso,
  },
]

export function Coffees() {
  return (
    <CoffeesContainer>
      <h2>Nossos cafés</h2>

      <CoffeesGrid>
        {coffeesList.map((coffee) => (
          <CoffeeCard key={coffee.id} />
        ))}
      </CoffeesGrid>
    </CoffeesContainer>
  )
}
