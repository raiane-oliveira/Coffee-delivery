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
