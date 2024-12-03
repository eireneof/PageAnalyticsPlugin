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
      <ButtonContainer>
        <Button onClick={onToggleTheme}>Alternar Tema</Button>
      </ButtonContainer>
      <Profile />
      <Footer />
    </>
  )
}
