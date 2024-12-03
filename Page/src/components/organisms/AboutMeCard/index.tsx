import * as S from './styles'
import Title from '../../atoms/Title'
import Card from '../../molecules/Card'

export default function AboutMeCard() {
  return (
    <Card id="card-sobre-mim">
      <S.CardHeader>
        <Title
          id="card-sobre-mim-title"
          accessibleName="Título do card"
          tag="h2"
        >
          Sobre mim
        </Title>

        <S.DescriptionText
          aria-label="Descrição detalhada sobre o usuário"
          className="readable-text"
          role="contentinfo"
        >
          Qualquer conteúdo textual inventado da sua preferência
        </S.DescriptionText>
      </S.CardHeader>

      <S.CardContent>
        <Title id="habilidades-title" accessibleName="Habilidades" tag="h3">
          Habilidades
        </Title>

        <S.CardSection aria-labelledby="ferramentas">
          <Title id="ferramentas-title" accessibleName="Habilidades" tag="h3">
            Ferramentas
          </Title>
          <S.StyledList role="list" aria-labelledby="ferramentas-title">
            <li>Sketch</li>
          </S.StyledList>
        </S.CardSection>

        <S.CardSection aria-labelledby="metodologias-title">
          <Title id="metodologias-title" accessibleName="Metodologias" tag="h4">
            Metodologias
          </Title>
          <S.StyledList role="list" aria-labelledby="metodologias-title">
            <li role="listitem" tabIndex={0}>
              Duplo Diamante
            </li>
            <li role="listitem" tabIndex={0}>
              Scrum
            </li>
          </S.StyledList>
        </S.CardSection>

        <S.CardSection aria-labelledby="banco-de-dados-title">
          <Title
            id="banco-de-dados-title"
            accessibleName="Banco de dados"
            tag="h4"
          >
            Banco de dados
          </Title>
          <S.StyledList role="list" aria-labelledby="banco-de-dados-title">
            <li role="listitem" tabIndex={0}>
              Firebase
            </li>
          </S.StyledList>
        </S.CardSection>
      </S.CardContent>
    </Card>
  )
}
