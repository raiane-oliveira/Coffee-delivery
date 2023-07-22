import { ShoppingCart } from '@phosphor-icons/react'
import { useCoffeeContext } from '../../../../contexts/CoffeeContext'
import {
  CoffeesContainer,
  CoffeesGrid,
  CartContainer,
  CoffeeCardContainer,
  ImgCoffeeContainer,
  PriceCartContainer,
  PriceContainer,
  TitleContainer,
} from './styles'
import { Link } from 'react-router-dom'
import { ActionsCoffeeCard } from '../../../../components/ActionsCoffeeCard'

export function Coffees() {
  const { coffees } = useCoffeeContext()

  const formatterCurrency = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  })

  return (
    <CoffeesContainer>
      <h2>Nossos cafés</h2>

      <CoffeesGrid>
        {coffees.map((coffee) => (
          <CoffeeCardContainer key={coffee.id}>
            <ImgCoffeeContainer>
              <img src={coffee.img} alt="" aria-hidden />
              <div>
                {coffee.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </ImgCoffeeContainer>

            <TitleContainer>
              <div>{coffee.name}</div>
              <p>{coffee.description}</p>
            </TitleContainer>

            <PriceCartContainer>
              <PriceContainer>
                <span>R$</span>
                <span>{formatterCurrency.format(coffee.price)}</span>
              </PriceContainer>

              <CartContainer>
                <ActionsCoffeeCard.Counter coffee={coffee} />

                <Link to="/checkout">
                  <ShoppingCart aria-hidden size={22} weight="fill" />
                </Link>
              </CartContainer>
            </PriceCartContainer>
          </CoffeeCardContainer>
        ))}
      </CoffeesGrid>
    </CoffeesContainer>
  )
}
