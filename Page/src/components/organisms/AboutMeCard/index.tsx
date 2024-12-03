import * as S from './styles'
import Title from '../../atoms/Title'
import Card from '../../molecules/Card'

export default function AboutMeCard() {
  return (
    <Card
      id="card-sobre-mim"
      accessibleName="Informações sobre o usuário"
      tabIndex={0}
    >
      <S.CardHeader>
        <Title
          id="card-sobre-mim-title"
          accessibleName="Sobre mim"
          tag="h2"
          tabIndex={0}
        >
          Sobre mim
        </Title>

        <S.DescriptionText
          tabIndex={0}
          aria-label="Descrição sobre o usuário: Qualquer conteúdo textual inventado da sua preferência"
          className="readable-text"
        >
          Qualquer conteúdo textual inventado da sua preferência
        </S.DescriptionText>
      </S.CardHeader>

      <S.CardContent>
        <S.CardSection>
          <Title
            id="habilidades-title"
            accessibleName="Habilidades"
            tag="h3"
            tabIndex={0}
          >
            Habilidades
          </Title>
        </S.CardSection>

        <S.CardSection>
          <Title
            id="ferramentas-title"
            accessibleName="Lista de Ferramentas"
            tag="h4"
            tabIndex={0}
          >
            Ferramentas
          </Title>
          <S.StyledList role="list">
            <li role="listitem" tabIndex={0}>
              Sketch
            </li>
          </S.StyledList>
        </S.CardSection>

        <S.CardSection>
          <Title
            id="metodologias-title"
            accessibleName="Lista de metodologias"
            tag="h4"
            tabIndex={0}
          >
            Metodologias
          </Title>
          <S.StyledList role="list">
            <li role="listitem" tabIndex={0}>
              Duplo Diamante
            </li>
            <li role="listitem" tabIndex={0}>
              Scrum
            </li>
          </S.StyledList>
        </S.CardSection>

        <S.CardSection>
          <Title
            id="banco-de-dados-title"
            accessibleName="Lista de banco de dados"
            tag="h4"
            tabIndex={0}
          >
            Banco de dados
          </Title>
          <S.StyledList role="list">
            <li role="listitem" tabIndex={0}>
              Firebase
            </li>
          </S.StyledList>
        </S.CardSection>
      </S.CardContent>
    </Card>
  )
}
