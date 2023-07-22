import { useTheme } from 'styled-components'
import {
  IllustrationContainer,
  OrderInfo,
  OrderInfoBorderContainer,
  OrderInfoContainer,
  SuccessOrderContainer,
  TitleSuccessOrderContainer,
} from './styles'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import {
  PaymentMethodsType,
  useCoffeeContext,
} from '../../contexts/CoffeeContext'
import { IllustrationSuccess } from '../../assets'

export function Success() {
  const theme = useTheme()
  const { orders } = useCoffeeContext()
  const lastOrder = orders[orders.length - 1]
  const formatedPaymentMethod =
    lastOrder.paymentMethod === PaymentMethodsType.cash
      ? 'Dinheiro'
      : lastOrder.paymentMethod === PaymentMethodsType.credit_card
      ? 'Cartão de crédito'
      : 'Cartão de débito'

  return (
    <SuccessOrderContainer>
      <div>
        <TitleSuccessOrderContainer>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TitleSuccessOrderContainer>

        <OrderInfoBorderContainer>
          <OrderInfoContainer>
            <OrderInfo bgIcon={theme.purple}>
              <div aria-hidden>
                <MapPin weight="fill" />
              </div>
              <p>
                Entrega em{' '}
                <strong>
                  {lastOrder.address}, {lastOrder.numberHouse}
                </strong>{' '}
                <span>
                  {lastOrder.complemento
                    ? `${lastOrder.complemento} - ${lastOrder.city}, ${lastOrder.state}`
                    : `${lastOrder.city} - ${lastOrder.state}`}
                </span>
              </p>
            </OrderInfo>
            <OrderInfo bgIcon={theme.yellow}>
              <div aria-hidden>
                <Timer weight="fill" />
              </div>
              <p>
                Previsão de entrega{' '}
                <span>
                  <strong>20 min - 30 min</strong>
                </span>
              </p>
            </OrderInfo>
            <OrderInfo bgIcon={theme['yellow-dark']}>
              <div aria-hidden>
                <CurrencyDollar weight="fill" />
              </div>
              <p>
                Pagamento na entrega{' '}
                <span>
                  <strong>{formatedPaymentMethod}</strong>
                </span>
              </p>
            </OrderInfo>
          </OrderInfoContainer>
        </OrderInfoBorderContainer>
      </div>

      <IllustrationContainer>
        <img src={IllustrationSuccess} alt="" aria-hidden />
      </IllustrationContainer>
    </SuccessOrderContainer>
  )
}
