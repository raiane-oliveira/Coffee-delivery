import { ShoppingCart } from '@phosphor-icons/react'
import { CoffeeExpresso } from '../../../../assets/coffees'
import {
  CartContainer,
  CoffeeCardContainer,
  ImgCoffeeContainer,
  PriceCartContainer,
  PriceContainer,
  TitleContainer,
} from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <ImgCoffeeContainer>
        <img src={CoffeeExpresso} alt="" aria-hidden />
        <div>
          <span>Tradicional</span>
          <span>Com Leite</span>
        </div>
      </ImgCoffeeContainer>

      <TitleContainer>
        <div>Expresso Tradicional</div>
        <p>O Tradicional café feito com água quente e grão moídos</p>
      </TitleContainer>

      <PriceCartContainer>
        <PriceContainer>
          <span>R$</span>
          <span>9,90</span>
        </PriceContainer>

        <CartContainer>
          <input type="number" name="" id="" min={0} placeholder="1" />

          <div>
            <ShoppingCart aria-hidden size={22} weight="fill" />
          </div>
        </CartContainer>
      </PriceCartContainer>
    </CoffeeCardContainer>
  )
}
