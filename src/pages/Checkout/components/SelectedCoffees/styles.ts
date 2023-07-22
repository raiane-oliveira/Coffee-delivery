import { styled } from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem 2.75rem;
  padding: 2.5rem;

  @media (min-width: 978px) {
    width: 28rem;
  }

  hr {
    border: 0;
    border-bottom: 1px solid ${(props) => props.theme['base-button']};
  }
`

export const CardCoffeeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;
`

export const CardCoffeeInfo = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    display: block;
    width: 4rem;
    height: 4rem;
  }
`

export const CardCoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const CardCoffeeTitle = styled.span`
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 1.3;
`

export const CardCoffeePrice = styled.span`
  color: ${(props) => props.theme['base-text']};
  font-weight: 700;
  line-height: 1.3;
`

export const TotalOrderDeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const TotalOrderDeliveryInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    line-height: 1.3;
  }
`

export const TotalOrderDeliveryTitle = styled(TotalOrderDeliveryInfo)`
  span {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const SendOrderButton = styled.button`
  width: 100%;
  padding: 0.75rem 0.5rem;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.6;
  border: 0;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
