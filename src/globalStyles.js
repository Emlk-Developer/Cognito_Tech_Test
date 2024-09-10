import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  a {
    font-size: 16px;
    font-weight: 400;
    color: var(--green);
  }

  h2 {
      color: var(--green);
      font-size: 46px;
      font-weight: 800;
      text-align: center;
      margin: 20px 0;
  }

`;

export default GlobalStyle;