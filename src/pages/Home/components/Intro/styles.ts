import { styled } from 'styled-components'

export const IntroContainer = styled.div`
  padding: 5.75rem 0;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
`

export const TextsContainer = styled.div`
  flex: 1 0 29rem;
  display: flex;
  flex-direction: column;
  gap: 4.13rem;

  @media (max-width: 640px) {
    flex-basis: fit-content;
  }

  section {
    display: grid;
    gap: 1rem;

    h1 {
      color: ${(props) => props.theme['base-title']};
      font:
        800 3rem 'Baloo 2',
        sans-serif;
      line-height: 1.3;
    }

    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
      line-height: 1.3;
    }
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15.375rem, max-content));
  gap: 1.25rem 2.5rem;

  svg {
    width: 1rem;
    height: 1rem;
  }
`

interface ItemProps {
  bgColor: string
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    line-height: 0;
    padding: 0.5rem;
    border-radius: 50%;
    color: ${(props) => props.theme.background};
    background-color: ${(props) => props.bgColor};
  }

  span {
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
  }
`

export const ImgIntroContainer = styled.div`
  max-width: 29.75rem;
  max-height: 22.5rem;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`
