import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { PaymentMethod, PaymentMethodsContainer } from './styles'
import { PaymentMethodsType } from '../../../../contexts/CoffeeContext'
import { useFormContext } from 'react-hook-form'

export function PaymentMethodFormCheckout() {
  const { register, watch } = useFormContext()

  const paymentMethod = watch('paymentMethod')

  return (
    <PaymentMethodsContainer>
      <PaymentMethod
        htmlFor={PaymentMethodsType.credit_card}
        className={
          paymentMethod === PaymentMethodsType.credit_card
            ? 'selected'
            : undefined
        }
      >
        <input
          type="radio"
          {...register('paymentMethod')}
          value={PaymentMethodsType.credit_card}
          id={PaymentMethodsType.credit_card}
        />
        <CreditCard aria-hidden />
        <span>Cartão de Crédito</span>
      </PaymentMethod>
      <PaymentMethod
        htmlFor={PaymentMethodsType.debit_card}
        className={
          paymentMethod === PaymentMethodsType.debit_card
            ? 'selected'
            : undefined
        }
      >
        <input
          type="radio"
          {...register('paymentMethod')}
          value={PaymentMethodsType.debit_card}
          id={PaymentMethodsType.debit_card}
        />
        <Bank aria-hidden />
        <span>Cartão de Débito</span>
      </PaymentMethod>
      <PaymentMethod
        htmlFor={PaymentMethodsType.cash}
        className={
          paymentMethod === PaymentMethodsType.cash ? 'selected' : undefined
        }
      >
        <input
          type="radio"
          {...register('paymentMethod')}
          value={PaymentMethodsType.cash}
          id={PaymentMethodsType.cash}
        />
        <Money aria-hidden />
        <span>Dinheiro</span>
      </PaymentMethod>
    </PaymentMethodsContainer>
  )
}
