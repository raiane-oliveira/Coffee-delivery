import { styled } from 'styled-components'

export const FieldsGridForm = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    'cep . . .'
    'address address address address'
    'number complemento complemento complemento'
    'bairro city city uf';
  gap: 1rem 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    border-radius: 0.25rem;
    overflow: hidden;
    background: ${(props) => props.theme['base-input']};
    grid-area: complemento;

    input {
      border: 1px solid ${(props) => props.theme['base-button']};
      border-right: 0;
      padding: 0.75rem;
      flex: 1;
    }

    span {
      padding: 0.88rem;
      align-self: center;
      border: 1px solid ${(props) => props.theme['base-button']};
      border-left: 0;
      color: ${(props) => props.theme['base-label']};
      font-size: 0.75rem;
      font-style: italic;
    }

    input:focus ~ span {
      display: none;
    }
  }

  input {
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 0.25rem;
    background: ${(props) => props.theme['base-input']};
    padding: 0.75rem;
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 1.3;
    outline: 0;

    &:focus {
      border: 1px solid ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme['base-text']};
    }

    &:nth-child(2) {
      grid-area: address;
    }
    &:nth-child(3) {
      grid-area: number;
    }
    &:nth-child(5) {
      grid-area: bairro;
    }
    &:nth-child(6) {
      grid-area: city;
    }
    &:nth-child(7) {
      grid-area: uf;
      max-width: 3.75rem;
    }
  }
`
