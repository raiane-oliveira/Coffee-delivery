import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  ImgIntroContainer,
  IntroContainer,
  Item,
  ItemsContainer,
  TextsContainer,
} from './styles'
import { useTheme } from 'styled-components'
import { ImgIntroHome } from '../../../../assets'

export function Intro() {
  const theme = useTheme()

  return (
    <IntroContainer>
      <TextsContainer>
        <section>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora.
          </p>
        </section>

        <ItemsContainer>
          <Item bgColor={theme['yellow-dark']}>
            <div>
              <ShoppingCart weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </Item>

          <Item bgColor={theme['base-text']}>
            <div>
              <Package weight="fill" />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </Item>

          <Item bgColor={theme.yellow}>
            <div>
              <Timer weight="fill" />
            </div>
            <span>Entrega rápida e rastreada</span>
          </Item>

          <Item bgColor={theme.purple}>
            <div>
              <Coffee weight="fill" />
            </div>
            <span>O café chega fresquinho até você</span>
          </Item>
        </ItemsContainer>
      </TextsContainer>

      <ImgIntroContainer>
        <img src={ImgIntroHome} alt="" aria-hidden />
      </ImgIntroContainer>
    </IntroContainer>
  )
}
