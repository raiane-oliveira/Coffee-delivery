import { styled } from 'styled-components'

interface OrderInfoProps {
  bgIcon: string
}

export const SuccessOrderContainer = styled.main`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  gap: 2.5rem;
  padding: 5rem 0;

  @media (max-width: 1057px) {
    justify-content: center;
  }
`

export const TitleSuccessOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 2.5rem;

  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font:
      800 2rem 'Baloo 2',
      sans-serif;
    line-height: 1.3;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 1.3;
  }
`

export const OrderInfoBorderContainer = styled.div`
  padding: 1px;
  background: linear-gradient(
    to right,
    rgba(219, 172, 44, 1),
    rgba(128, 71, 248, 1)
  );

  border-radius: 0.375rem 2.25rem;
`

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.background};
  border-radius: 0.375rem 2.25rem;
`

export const OrderInfo = styled.div<OrderInfoProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    border-radius: 62.5rem;
    background: ${(props) => props.bgIcon};
    color: ${(props) => props.theme.background};
    padding: 0.5rem;
    line-height: 0;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }

  p {
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;

    strong {
      font-weight: 700;
    }

    span {
      display: block;
    }
  }
`

export const IllustrationContainer = styled.div`
  max-width: 30.75rem;
  height: 18.3rem;
  margin-top: auto;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`
