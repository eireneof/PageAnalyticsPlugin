import Card from '../../molecules/Card'
import Title from '../../atoms/Title'
import * as S from './styles'
import Button from '../../atoms/Button'

export default function LastsPostsListCard() {
  return (
    <Card id="ultimos-postagens-card">
      <S.CardHeader>
        <Title
          id="ultimos-postagens-title"
          accessibleName="Título do card"
          tag="h2"
        >
          Últimas postagens
        </Title>
      </S.CardHeader>

      <S.CardContent>
        <S.StyledList role="list" aria-labelledby="ultimos-postagens-card">
          <S.StyledItemList role="listitem">
            DD/MM/yyyy - Uma postagem interessante
          </S.StyledItemList>
          <S.StyledItemList role="listitem">
            DD/MM/yyyy - Outra postagem super interessante
          </S.StyledItemList>
          <S.StyledItemList role="listitem">
            DD/MM/yyyy - Uma postagem interessante
          </S.StyledItemList>
          <S.StyledItemList role="listitem">
            DD/MM/yyyy - Outra postagem super interessante
          </S.StyledItemList>
          <S.StyledItemList role="listitem">
            DD/MM/yyyy - Outra postagem super interessante
          </S.StyledItemList>
        </S.StyledList>

        <S.ButtonContainer>
          <Button>Ver todas as postagens</Button>
        </S.ButtonContainer>
      </S.CardContent>
    </Card>
  )
}
