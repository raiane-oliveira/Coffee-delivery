import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { PaymentMethod, PaymentMethodsContainer } from './styles'
import { PaymentMethodsType } from '../..'
import { useFormContext } from 'react-hook-form'
import { useState } from 'react'

export function PaymentMethodFormCheckout() {
  const [paymentMethodId, setPaymentMethodId] = useState<number | null>(null)
  const { register } = useFormContext()

  function handleSelectPaymentMethod(id: number) {
    if (paymentMethodId !== id) {
      setPaymentMethodId(id)
    } else {
      setPaymentMethodId(null)
    }
  }

  return (
    <PaymentMethodsContainer>
      <PaymentMethod
        type="button"
        onClick={() => handleSelectPaymentMethod(0)}
        className={paymentMethodId === 0 ? 'selected' : ''}
        value={PaymentMethodsType.credit_card}
        {...register('paymentMethod')}
      >
        <CreditCard aria-hidden />
        <span>Cartão de crédito</span>
      </PaymentMethod>

      <PaymentMethod
        type="button"
        onClick={() => handleSelectPaymentMethod(1)}
        className={paymentMethodId === 1 ? 'selected' : ''}
        value={PaymentMethodsType.debit_card}
        {...register('paymentMethod')}
      >
        <Bank aria-hidden />
        <span>Cartão de débito</span>
      </PaymentMethod>

      <PaymentMethod
        type="button"
        onClick={() => handleSelectPaymentMethod(2)}
        className={paymentMethodId === 2 ? 'selected' : ''}
        value={PaymentMethodsType.cash}
        {...register('paymentMethod')}
      >
        <Money aria-hidden />
        <span>Dinheiro</span>
      </PaymentMethod>
    </PaymentMethodsContainer>
  )
}
