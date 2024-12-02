import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary_100};
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1rem;
`;

export default function Header() {
    return (
        <HeaderContainer>
        <div>☰</div>
        </HeaderContainer>
    );
}


