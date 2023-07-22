import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import { InputAddressFormCheckout } from './components/InputAddressFormCheckout'
import { PaymentMethodFormCheckout } from './components/PaymentMethodFormCheckout'
import { SelectedCoffees } from './components/SelectedCoffees'
import { Success } from '../Success'

import {
  CheckoutFormContainer,
  CompleteOrderContainer,
  FieldsetFormCheckout,
  FormCheckoutContainer,
  OrderCheckoutContainer,
  TitleContentCheckout,
  TitleFieldsetFormCheckout,
} from './styles'
import { useCoffeeContext } from '../../contexts/CoffeeContext'

const formCheckoutValidationSchema = zod.object({
  cep: zod.coerce.number().min(5),
  address: zod.string().nonempty('Obrigatório'),
  numberHouse: zod.coerce.number().min(1, 'Obrigatório'),
  complemento: zod.string().optional(),
  bairro: zod.string().nonempty('Obrigatório'),
  city: zod.string().nonempty('Obrigatório'),
  state: zod
    .string()
    .nonempty('Obrigatório')
    .max(2, 'Estado inválido')
    .toUpperCase(),
  paymentMethod: zod.string().nonempty('Obrigatório'),
})

type FormCheckoutData = zod.infer<typeof formCheckoutValidationSchema>

export function Checkout() {
  const { addNewOrder } = useCoffeeContext()
  const theme = useTheme()
  const scheduleNewDelivery = useForm<FormCheckoutData>({
    resolver: zodResolver(formCheckoutValidationSchema),
  })

  const {
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = scheduleNewDelivery

  function handleScheduleNewDelivery(data: FormCheckoutData) {
    addNewOrder(data)
    reset()
  }

  if (isSubmitSuccessful) return <Success />

  return (
    <main>
      <CheckoutFormContainer onSubmit={handleSubmit(handleScheduleNewDelivery)}>
        <FormProvider {...scheduleNewDelivery}>
          <CompleteOrderContainer>
            <TitleContentCheckout>Complete seu pedido</TitleContentCheckout>

            <FormCheckoutContainer>
              <FieldsetFormCheckout>
                <TitleFieldsetFormCheckout colorSVG={theme['yellow-dark']}>
                  <MapPinLine aria-hidden />
                  <legend>
                    Endereço de Entrega
                    <span>
                      Informe o endereço onde deseja receber seu pedido
                    </span>
                  </legend>
                </TitleFieldsetFormCheckout>

                <InputAddressFormCheckout />
              </FieldsetFormCheckout>

              <FieldsetFormCheckout>
                <TitleFieldsetFormCheckout colorSVG={theme.purple}>
                  <CurrencyDollar aria-hidden />
                  <legend>
                    Pagamento
                    <span>
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </span>
                  </legend>
                </TitleFieldsetFormCheckout>

                <PaymentMethodFormCheckout />
              </FieldsetFormCheckout>
            </FormCheckoutContainer>
          </CompleteOrderContainer>

          <OrderCheckoutContainer>
            <TitleContentCheckout>Cafés selecionados</TitleContentCheckout>
            <SelectedCoffees />
          </OrderCheckoutContainer>
        </FormProvider>
      </CheckoutFormContainer>
    </main>
  )
}
