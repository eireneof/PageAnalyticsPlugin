import { ICON_PATH } from './constant'
import { IconProps } from './interface'
import { StyledImg } from './styles'

export default function Icon({
  id,
  iconType,
  size,
  accessibleName,
  isDecorative = true,
  alt,
  // color='secondary_200',
  ...props
}: IconProps) {
  // TODO: ver como mudar a cor do ícone quando o theme mudar
  return (
    <StyledImg
      src={ICON_PATH[iconType]}
      alt={!isDecorative ? alt : ''}
      aria-hidden={isDecorative ? 'true' : 'false'}
      size={size}
      {...props}
    />
  )
}
