import { StyledButton } from './styles'
import { IButton } from './interface'

export default function Button({ id, children, onClick, ...props }: IButton) {
  return (
    <StyledButton id={`btn-${id}`} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  )
}
