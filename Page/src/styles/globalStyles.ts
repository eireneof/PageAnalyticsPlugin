import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.secondary_100};
    color: ${({ theme }) => theme.colors.secondary_200};
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    margin: 0;
  }
`;

export default GlobalStyles;
