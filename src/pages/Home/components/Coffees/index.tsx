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
import { ChangeEvent } from 'react'

export function Coffees() {
  const { coffees, addNewCoffeeToCart } = useCoffeeContext()

  function handleAddNewProductToCart(e: ChangeEvent, id: number) {
    addNewCoffeeToCart(id, Number(e.target.value))
  }

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
                <span>{coffee.price.toLocaleString('pt-BR')}</span>
              </PriceContainer>

              <CartContainer>
                <input
                  type="number"
                  name=""
                  min={0}
                  onChange={(e) => handleAddNewProductToCart(e, coffee.id)}
                />

                <div>
                  <ShoppingCart aria-hidden size={22} weight="fill" />
                </div>
              </CartContainer>
            </PriceCartContainer>
          </CoffeeCardContainer>
        ))}
      </CoffeesGrid>
    </CoffeesContainer>
  )
}
