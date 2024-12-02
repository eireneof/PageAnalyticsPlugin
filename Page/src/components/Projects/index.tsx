import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 1rem;
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 5px;
`;

export default function  Projects(){
    return (
        <ProjectsContainer>
            <h2>Projetos</h2>
            <ProjectCard>
                <img src="/assets/project.png" alt="Imagem do Projeto" />
                <h3>Nome do Projeto</h3>
                <p>Descrição do projeto.</p>
                <button>Saiba mais</button>
            </ProjectCard>
    </ProjectsContainer>
    )
}
