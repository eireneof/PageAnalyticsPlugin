import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333333;
  color: #ffffff;
  text-align: center;
  padding: 1rem;
  position: relative;
  bottom: 0;
  width: 100%;
`;

export default function Footer() {
    return (
        <FooterContainer>
            <p>Desafio para Hand Talk</p>
        </FooterContainer>
    )
}
