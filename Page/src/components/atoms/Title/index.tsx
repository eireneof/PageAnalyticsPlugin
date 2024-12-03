import { TitleProps } from './interface'
import { StyledTitle } from './styles'

export default function Title({
  tag = 'h1',
  children,
  accessibleName,
  isDecorative = false,
  titleType = 'huge',
}: TitleProps) {
  const Tag = tag
  return (
    <StyledTitle role="title" titleType={titleType}>
      <Tag
        aria-hidden={isDecorative ? 'true' : undefined}
        aria-label={
          accessibleName && !isDecorative ? accessibleName : undefined
        }
      >
        {children}
      </Tag>
    </StyledTitle>
  )
}
