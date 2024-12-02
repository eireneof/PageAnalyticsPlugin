import styled from 'styled-components';

const ProfileContainer = styled.div`
  text-align: center;
  padding: 1rem;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export default function Profile () {
    return (
        <ProfileContainer>
            <Avatar src="/assets/avatar.png" alt="Avatar do Usuário" />
            <h1>Nome do Usuário</h1>
        <section>
            <h2>Sobre mim</h2>
            <p>Descrição breve sobre o usuário.</p>
        </section>
  </ProfileContainer>
    )
}


