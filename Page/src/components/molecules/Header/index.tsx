import Icon from '../../atoms/Icon'
import { HeaderContainer } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <Icon
        role="img"
        id="menu-hamburguer"
        iconType="MENU_HAMBURGUER"
        isDecorative={true}
        alt="Ícone de Menu de navegação estático"
      />
    </HeaderContainer>
  )
}
