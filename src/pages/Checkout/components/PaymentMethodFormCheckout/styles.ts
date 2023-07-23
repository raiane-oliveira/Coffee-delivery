import { styled } from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const PaymentMethodsContainer = styled(RadioGroup.Root)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`

export const PaymentMethod = styled(RadioGroup.Item)`
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

  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1.6;
  color: ${(props) => props.theme['base-text']};

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  &[data-state='checked'] {
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }

  svg {
    color: ${(props) => props.theme.purple};
    width: 1rem;
    height: 1rem;
  }

  span {
    white-space: nowrap;
  }
`
