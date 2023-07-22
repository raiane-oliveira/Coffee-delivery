import { styled } from 'styled-components'

interface TitleFieldsetFormCheckoutProps {
  colorSVG: string
}

export const CheckoutFormContainer = styled.form`
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 2rem;
  padding-top: 2.5rem;
`

export const BaseContentCheckoutContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 0.94rem;
`

export const OrderCheckoutContainer = styled(BaseContentCheckoutContainer)`
  flex: 1;
`

export const TitleContentCheckout = styled.div`
  color: ${(props) => props.theme['base-subtitle']};
  font:
    700 1.125rem 'Baloo 2',
    sans-serif;
  line-height: 1.3;
`

export const FormCheckoutContainer = styled.div`
  display: grid;
  gap: 0.75rem;
`

export const FieldsetFormCheckout = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem;
  border: 0;
`

export const TitleFieldsetFormCheckout = styled.div<TitleFieldsetFormCheckoutProps>`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.colorSVG};
    width: 1.375rem;
    height: 1.375rem;
  }

  legend {
    flex: 1;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;

    span {
      display: block;
      color: ${(props) => props.theme['base-text']};
      font-size: 0.875rem;
    }
  }
`
