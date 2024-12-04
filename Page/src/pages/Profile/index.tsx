import Button from '../../components/atoms/Button'
import Footer from '../../components/molecules/Footer'
import Header from '../../components/molecules/Header'
import Profile from '../../components/templates/Profile'
import { ProfilePageProps } from './interface'
import { ButtonContainer } from './styles'

export default function ProfilePage({ onToggleTheme }: ProfilePageProps) {
  return (
    <>
      <Header />
      <main>
        <ButtonContainer>
          <Button
            id="theme-switch-button"
            dataTestId="theme-switch-button"
            onClick={onToggleTheme}
          >
            Alternar Tema
          </Button>
        </ButtonContainer>
        <Profile />
      </main>
      <Footer />
    </>
  )
}
