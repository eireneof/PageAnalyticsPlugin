import styled from 'styled-components'

interface CardProps {
  id: string
  children: React.ReactNode
  accessibleName?: string
  tabIndex?: number
}

const StyledCard = styled.div<CardProps>`
  background-color: ${({ theme }) => theme.colors.none};
  border: ${({ theme }) => theme.borderRadius.border_2} solid
    ${({ theme }) => theme.colors.secondary_200};
  border-radius: ${({ theme }) => theme.borderRadius.border_8};
  padding: ${({ theme }) => theme.padding.size.large};
  box-sizing: border-box;
`

export default function Card({
  id,
  children,
  accessibleName,
  tabIndex,
}: CardProps) {
  return (
    <StyledCard
      id={id}
      aria-hidden="false"
      tabIndex={tabIndex}
      aria-label={accessibleName}
    >
      {children}
    </StyledCard>
  )
}
