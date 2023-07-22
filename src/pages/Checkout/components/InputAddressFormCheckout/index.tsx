import { FieldsGridForm } from './styles'
import { useFormContext } from 'react-hook-form'

export function InputAddressFormCheckout() {
  const { register } = useFormContext()

  return (
    <FieldsGridForm>
      <input
        type="text"
        placeholder="CEP"
        aria-label="CEP"
        {...register('cep', {
          valueAsNumber: true,
        })}
      />
      <input
        type="text"
        placeholder="Rua"
        aria-label="Rua"
        {...register('address')}
      />
      <input
        type="text"
        placeholder="Número"
        aria-label="Número"
        {...register('number', {
          valueAsNumber: true,
        })}
      />
      <div>
        <input type="text" placeholder="Complemento" aria-label="Complemento" />
        <span>Opcional</span>
      </div>
      <input
        type="text"
        placeholder="Bairro"
        aria-label="Bairro"
        {...register('bairro')}
      />
      <input
        type="text"
        placeholder="Cidade"
        aria-label="Cidade"
        {...register('city')}
      />
      <input
        type="text"
        placeholder="UF"
        aria-label="UF"
        {...register('state')}
      />
    </FieldsGridForm>
  )
}
