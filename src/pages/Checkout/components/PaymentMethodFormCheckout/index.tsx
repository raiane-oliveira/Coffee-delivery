import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { PaymentMethod, PaymentMethodsContainer } from './styles'
import { PaymentMethodsType } from '../../../../contexts/DeliveriesContext'
import { Controller, useFormContext } from 'react-hook-form'

export function PaymentMethodFormCheckout() {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name="paymentMethod"
      render={({ field }) => (
        <PaymentMethodsContainer
          onValueChange={field.onChange}
          value={field.value}
        >
          <PaymentMethod value={PaymentMethodsType.credit_card}>
            <CreditCard aria-hidden />
            <span>Cartão de Crédito</span>
          </PaymentMethod>

          <PaymentMethod value={PaymentMethodsType.debit_card}>
            <Bank aria-hidden />
            <span>Cartão de Débito</span>
          </PaymentMethod>

          <PaymentMethod value={PaymentMethodsType.cash}>
            <Money aria-hidden />
            <span>Dinheiro</span>
          </PaymentMethod>
        </PaymentMethodsContainer>
      )}
    />
  )
}
