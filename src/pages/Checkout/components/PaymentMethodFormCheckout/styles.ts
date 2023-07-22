import { styled } from 'styled-components'

export const PaymentMethodsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`

export const PaymentMethod = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 0.375rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  &.selected {
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }

  svg {
    color: ${(props) => props.theme.purple};
    width: 1rem;
    height: 1rem;
  }

  span {
    flex: 1;
    text-align: left;
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-text']};
  }
`
