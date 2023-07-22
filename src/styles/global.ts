import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${(props) => props.theme.background};
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem "Roboto", sans-serif;
  }

  @media (max-width: 480px) {
    :root {
      font-size: 87%;
    }
  }
`
