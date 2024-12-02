import styled from 'styled-components';

const PostsContainer = styled.section`
  padding: 1rem;
`;

const PostItem = styled.div`
  margin-bottom: 1rem;
`;

export default function Posts(){
    return (
        <PostsContainer>
            <h2>Últimas Postagens</h2>
            <PostItem>
                <p>01/12/2024 - Título da Postagem</p>
            </PostItem>
            <PostItem>
                <p>30/11/2024 - Título da Postagem</p>
            </PostItem>
      </PostsContainer>
    )
}

