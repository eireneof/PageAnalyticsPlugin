export interface TitleProps {
  id: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4'
  titleType?: 'huge' | 'large' | 'medium' | 'small'
  children: React.ReactNode
  accessibleName?: string
  isDecorative?: boolean
}
