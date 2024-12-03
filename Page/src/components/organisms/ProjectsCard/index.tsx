import * as S from './styles'
import Title from '../../atoms/Title'
import Card from '../../molecules/Card'
import Icon from '../../atoms/Icon'
import Button from '../../atoms/Button'

export default function ProjectsCard() {
  return (
    <S.ProjectsContainer>
      <S.CardHeader>
        <Title id="projetos" tag="h2">
          Projetos
        </Title>
      </S.CardHeader>
      <Card id="projeto-card">
        <Icon
          id="imagem-sem-conteudo"
          iconType="NO_IMAGE_CONTENT"
          size={250}
        ></Icon>
        <Title id="projetos-title" tag="h3">
          Nome do Projeto
        </Title>
        <S.DescriptionText>Descrição sobre o projeto.</S.DescriptionText>
        <S.ButtonContainer>
          <Button>Ver mais</Button>
        </S.ButtonContainer>
      </Card>
      <S.CardFooter>
        <Button>Ver todos os projetos</Button>
      </S.CardFooter>
    </S.ProjectsContainer>
  )
}
