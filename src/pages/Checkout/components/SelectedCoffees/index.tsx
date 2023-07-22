import { Fragment } from 'react'
import { useCoffeeContext } from '../../../../contexts/CoffeeContext'
import {
  CardCoffeeContainer,
  CardCoffeeDetails,
  CardCoffeeInfo,
  CardCoffeePrice,
  CardCoffeeTitle,
  SelectedCoffeesContainer,
  SendOrderButton,
  TotalOrderDeliveryContainer,
  TotalOrderDeliveryInfo,
  TotalOrderDeliveryTitle,
} from './styles'
import { ActionsCoffeeCard } from '../../../../components/ActionsCoffeeCard'

export function SelectedCoffees() {
  const { coffees } = useCoffeeContext()
  const selectedCoffees = coffees.filter(
    (coffee) => coffee.amountInShoppingCart > 0,
  )
  const totalItemsValue =
    selectedCoffees.length > 0
      ? selectedCoffees
          .map((coffee) => {
            const sum = coffee.amountInShoppingCart * coffee.price
            return sum
          })
          .reduce((accumulator, currentValue) => accumulator + currentValue)
      : 0

  const formatterCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  const taxDelivery = selectedCoffees.length > 0 ? 3.5 : 0

  return (
    <SelectedCoffeesContainer>
      {selectedCoffees.map((coffee) => (
        <Fragment key={coffee.id}>
          <CardCoffeeContainer>
            <CardCoffeeInfo>
              <img src={coffee.img} alt="" aria-hidden />

              <CardCoffeeDetails>
                <CardCoffeeTitle>{coffee.name}</CardCoffeeTitle>

                <ActionsCoffeeCard.Root>
                  <ActionsCoffeeCard.Counter coffee={coffee} />
                  <ActionsCoffeeCard.Remove coffeeId={coffee.id} />
                </ActionsCoffeeCard.Root>
              </CardCoffeeDetails>
            </CardCoffeeInfo>

            <CardCoffeePrice>
              {formatterCurrency.format(coffee.price)}
            </CardCoffeePrice>
          </CardCoffeeContainer>

          <hr />
        </Fragment>
      ))}

      <TotalOrderDeliveryContainer>
        <TotalOrderDeliveryInfo>
          <span>Total de itens</span>
          <span>{formatterCurrency.format(totalItemsValue)}</span>
        </TotalOrderDeliveryInfo>

        <TotalOrderDeliveryInfo>
          <span>Entrega</span>
          <span>{formatterCurrency.format(taxDelivery)}</span>
        </TotalOrderDeliveryInfo>

        <TotalOrderDeliveryTitle>
          <span>Total</span>
          <span>{formatterCurrency.format(totalItemsValue + taxDelivery)}</span>
        </TotalOrderDeliveryTitle>
      </TotalOrderDeliveryContainer>

      <SendOrderButton type="submit">Confirmar pedido</SendOrderButton>
    </SelectedCoffeesContainer>
  )
}
