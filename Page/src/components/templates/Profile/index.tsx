import Icon from '../../atoms/Icon'
import Title from '../../atoms/Title'
import AboutMeCard from '../../organisms/AboutMeCard'
import Button from '../../atoms/Button'
import ProjectsCard from '../../organisms/ProjectsCard'
import LastsPostsListCard from '../../organisms/LastPostsListCard'
import { ProfileContainer } from './styles'
import { useTheme } from 'styled-components'

export default function Profile() {
  const currentTheme = useTheme()
  return (
    <ProfileContainer>
      <Icon
        id="avatar_profile"
        role="img"
        iconType={
          currentTheme.themeKey === 'lightTheme'
            ? 'PROFILE_AVATAR'
            : 'PROFILE_AVATAR_DARK_THEME'
        }
        size={200}
        isDecorative={false}
        alt="Avatar de usuário genérico"
        accessibleName="Avatar de usuário genérico"
        tabIndex={0}
      />
      <Title
        id="nome-do-usuario"
        accessibleName="Nome do Usuário: Fulane"
        tabIndex={0}
      >
        Fulane
      </Title>
      <Button id="entre-em-contato">Entre em contato</Button>
      <AboutMeCard />
      <ProjectsCard />
      <LastsPostsListCard />
    </ProfileContainer>
  )
}
