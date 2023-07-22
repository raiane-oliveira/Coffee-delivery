import {
  FieldContainer,
  FieldsGridForm,
  OptionalFieldContainer,
  OptionalLabel,
} from './styles'
import { useFormContext } from 'react-hook-form'

export function InputAddressFormCheckout() {
  const { register } = useFormContext()

  return (
    <FieldsGridForm>
      <FieldContainer gridArea="cep">
        <input
          type="text"
          placeholder="CEP"
          aria-label="CEP"
          {...register('cep')}
        />
      </FieldContainer>
      <FieldContainer gridArea="address">
        <input
          type="text"
          placeholder="Rua"
          aria-label="Rua"
          {...register('address')}
        />
      </FieldContainer>
      <FieldContainer gridArea="number">
        <input
          type="text"
          placeholder="Número"
          aria-label="Número"
          {...register('numberHouse')}
        />
      </FieldContainer>

      <FieldContainer gridArea="complemento">
        <OptionalFieldContainer>
          <input
            type="text"
            placeholder="Complemento"
            aria-label="Complemento"
          />
          <OptionalLabel>Opcional</OptionalLabel>
        </OptionalFieldContainer>
      </FieldContainer>

      <FieldContainer gridArea="bairro">
        <input
          type="text"
          placeholder="Bairro"
          aria-label="Bairro"
          {...register('bairro')}
        />
      </FieldContainer>
      <FieldContainer gridArea="city">
        <input
          type="text"
          placeholder="Cidade"
          aria-label="Cidade"
          {...register('city')}
        />
      </FieldContainer>
      <FieldContainer gridArea="uf">
        <input
          type="text"
          placeholder="UF"
          aria-label="UF"
          {...register('state')}
        />
      </FieldContainer>
    </FieldsGridForm>
  )
}
