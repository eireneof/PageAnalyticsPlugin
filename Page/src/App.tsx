import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/globalStyles'
import ProfilePage from './pages/Profile'
import darkTheme from './styles/themes/custom/darkTheme'
import lightTheme from './styles/themes/custom/lightTheme'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ProfilePage
        onToggleTheme={toggleTheme}
      />
    </ThemeProvider>
  )
}

// TODO: mockar dados
// TODO: deixar tema armazenado em contexto
