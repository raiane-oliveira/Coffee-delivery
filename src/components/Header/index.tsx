import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { LogoCoffeeDelivery } from '../../assets'
import {
  ContainerShoppingCart,
  HeaderContainer,
  InfoContainer,
  LocationContainer,
  LogoContainer,
  NavContainer,
} from './styles'
import { useCoffeeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const { shoppingCart } = useCoffeeContext()

  return (
    <HeaderContainer>
      <NavContainer>
        <LogoContainer>
          <img
            src={LogoCoffeeDelivery}
            alt="Copo de café ao lado do texto 'Coffee Delivery'"
          />
        </LogoContainer>

        <InfoContainer>
          <LocationContainer>
            <MapPin aria-hidden size={22} weight="fill" />
            Porto Alegre, RS
          </LocationContainer>

          <ContainerShoppingCart>
            {!!shoppingCart && <span>{shoppingCart}</span>}

            <button type="button" aria-label="Abrir carrinho de compras">
              <ShoppingCart aria-hidden size={22} weight="fill" />
            </button>
          </ContainerShoppingCart>
        </InfoContainer>
      </NavContainer>
    </HeaderContainer>
  )
}
