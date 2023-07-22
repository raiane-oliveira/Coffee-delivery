import { styled } from 'styled-components'

interface FieldContainerProps {
  gridArea:
    | 'cep'
    | 'address'
    | 'number'
    | 'complemento'
    | 'bairro'
    | 'city'
    | 'uf'
}

export const FieldsGridForm = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    'cep . . .'
    'address address address address'
    'number complemento complemento complemento'
    'bairro city city uf';
  gap: 1rem 0.75rem;

  @media (max-width: 443px) {
    grid-template-columns: 1fr max-content;
    grid-template-areas:
      'cep cep'
      'address address'
      'number number'
      'complemento complemento'
      'bairro bairro'
      'city uf';
  }
`

export const FieldContainer = styled.div<FieldContainerProps>`
  grid-area: ${(props) => props.gridArea};

  input {
    width: 100%;
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 0.25rem;
    background: ${(props) => props.theme['base-input']};
    padding: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.3;
    outline: 0;
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme['base-text']};
    }
  }

  /* State field */
  &:nth-child(7) {
    max-width: 3.75rem;
  }
`

export const OptionalFieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 0.25rem;
  overflow: hidden;
  background: ${(props) => props.theme['base-input']};

  input {
    border: 1px solid ${(props) => props.theme['base-button']};
    border-right: 0;
    padding: 0.75rem;
    flex: 1;
  }
`

export const OptionalLabel = styled.span`
  padding: 0.85rem;
  align-self: center;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-left: 0;
  color: ${(props) => props.theme['base-label']};
  font-size: 0.75rem;
  font-style: italic;

  input:focus ~ & {
    display: none;
  }
`
