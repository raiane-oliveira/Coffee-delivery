import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import { InputAddressFormCheckout } from './components/InputAddressFormCheckout'
import { PaymentMethodFormCheckout } from './components/PaymentMethodFormCheckout'
import { SelectedCoffees } from './components/SelectedCoffees'

import {
  BaseContentCheckoutContainer,
  CheckoutFormContainer,
  FieldsetFormCheckout,
  FormCheckoutContainer,
  OrderCheckoutContainer,
  TitleContentCheckout,
  TitleFieldsetFormCheckout,
} from './styles'

export enum PaymentMethodsType {
  credit_card = 'credit_card',
  debit_card = 'debit_card',
  cash = 'cash',
}

const methodsOfPayment = ['credit_card', 'debit_card', 'cash']

const formCheckoutValidationSchema = zod.object({
  cep: zod.number().min(5),
  address: zod.string().nonempty('Obrigatório'),
  number: zod.number().min(1, 'Obrigatório'),
  complemento: zod.string().optional(),
  bairro: zod.string().nonempty('Obrigatório'),
  city: zod.string().nonempty('Obrigatório'),
  state: zod.string().nonempty('Obrigatório').max(2, 'Estado inválido'),
  paymentMethod: zod
    .string()
    .refine(
      (method) => methodsOfPayment.includes(method),
      'Método de pagamento inválido',
    ),
})

type FormCheckoutData = zod.infer<typeof formCheckoutValidationSchema>

export function Checkout() {
  const theme = useTheme()
  const scheduleNewDelivery = useForm<FormCheckoutData>({
    resolver: zodResolver(formCheckoutValidationSchema),
  })

  const {
    handleSubmit,
    formState: { errors },
  } = scheduleNewDelivery

  function handleScheduleNewDelivery(data: FormCheckoutData) {
    console.log(data)
  }

  return (
    <main>
      <CheckoutFormContainer onSubmit={handleSubmit(handleScheduleNewDelivery)}>
        <FormProvider {...scheduleNewDelivery}>
          <BaseContentCheckoutContainer>
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
          </BaseContentCheckoutContainer>

          <OrderCheckoutContainer>
            <TitleContentCheckout>Cafés selecionados</TitleContentCheckout>
            <SelectedCoffees />
          </OrderCheckoutContainer>
        </FormProvider>
      </CheckoutFormContainer>
    </main>
  )
}
