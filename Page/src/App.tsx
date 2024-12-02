import { useState } from 'react'
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/globalStyles';
import ProfilePage from './pages/Profile';
import darkTheme from './styles/themes/custom/darkTheme';
import lightTheme from './styles/themes/custom/lightTheme';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ProfilePage onToggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App

// TODO: configurar prettier
// TODO: refatorar para atomic desing
// TODO: separar em styles, interfaces e etc
// TODO: implementar wcag
// TODO: ver como fazer teste de acessibilidade
// TODO: teste de contraste
// TODO: teste de navegação pelo teclado
// TODO: teste de leitor de tela
// TODO: teste de zoom e responsividade
// TODO: mockar dados

