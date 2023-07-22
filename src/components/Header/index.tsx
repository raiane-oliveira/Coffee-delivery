import { MapPin, Scroll, ShoppingCart } from '@phosphor-icons/react'
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
import { Link } from 'react-router-dom'

export function Header() {
  const { shoppingCart } = useCoffeeContext()

  return (
    <HeaderContainer>
      <NavContainer>
        <LogoContainer to="/">
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

            <Link to="/checkout" title="Carrinho de compras">
              <ShoppingCart aria-hidden size={22} weight="fill" />
            </Link>
          </ContainerShoppingCart>

          <Link to="/history" title="Histórico de pedidos">
            <Scroll aria-hidden size={22} weight="fill" />
          </Link>
        </InfoContainer>
      </NavContainer>
    </HeaderContainer>
  )
}
