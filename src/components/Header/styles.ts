import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;
`

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  width: 5.3rem;
  height: 2.5rem;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 0.375rem;
`

export const ContainerShoppingCart = styled.div`
  position: relative;

  span {
    display: grid;
    place-content: center;
    position: absolute;
    right: -0.5rem;
    top: -0.5rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    font:
      700 0.75rem 'Roboto',
      sans-serif;
  }

  button {
    line-height: 0;
    padding: 0.5rem;
    border: 0;
    border-radius: 0.375rem;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    cursor: pointer;
  }
`
