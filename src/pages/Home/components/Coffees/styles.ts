import { styled } from 'styled-components'

export const CoffeesContainer = styled.section`
  padding: 2rem 0;
  display: grid;
  gap: 3.38rem;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font:
      800 2rem 'Baloo 2',
      sans-serif;
    line-height: 1.3;
  }
`

export const CoffeesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 2.5rem 2rem;
`

export const CoffeeCardContainer = styled.div`
  display: grid;
  place-items: center;
  background: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem 2.25rem;
  padding: 1.25rem;
  text-align: center;
  position: relative;
`

export const ImgCoffeeContainer = styled.div`
  display: grid;
  place-items: center;

  img {
    display: block;
    transform: translateY(-2.5rem);
    width: 7.5rem;
    height: 7.5rem;
  }

  div {
    display: flex;
    gap: 0.25rem;
    margin-top: -1.75rem;

    span {
      padding: 0.25rem 0.5rem;
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      border-radius: 6.25rem;
      text-transform: uppercase;
      font-size: 0.625rem;
      line-height: 1.3;
      font-weight: 700;
    }
  }
`

export const TitleContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 2rem;

  div {
    color: ${(props) => props.theme['base-subtitle']};
    font:
      700 1.25rem 'Baloo 2',
      sans-serif;
    line-height: 1.3;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 1.3;
  }
`

export const PriceCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const PriceContainer = styled.div`
  color: ${(props) => props.theme['base-text']};
  font-size: 0.875rem;
  line-height: 1.3;

  :last-child {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    padding-left: 0.2rem;
  }
`

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    padding: 0.5rem;
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};
    line-height: 0;
    border-radius: 0.375rem;
    transition: 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.purple};
    }
  }
`
