import { styled } from 'styled-components'

export const ActionsCoffeeCardRootContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CounterCoffeeCardInput = styled.input`
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 0;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-title']};
  line-height: 1.3;
  width: 4.5rem;
`

export const RemoveCoffeeFromCartButton = styled.button`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  padding: 0 0.5rem;
  border-radius: 0.375rem;
  background: ${(props) => props.theme['base-button']};
  border: 0;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.purple};
  }

  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  line-height: 1.6;
  text-transform: uppercase;
`
