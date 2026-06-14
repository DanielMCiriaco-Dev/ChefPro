import styled from "styled-components";

const Card = styled.article`
  display: grid;
  grid-template-columns: minmax(260px, 0.8fr) minmax(320px, 1.2fr);
  gap: 28px;
  padding: 28px;
  border-radius: 28px;
  background: #ffffff;
  border: 1px solid #f2d9c3;
  box-shadow: 0 18px 45px rgba(113, 55, 20, 0.09);

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  min-height: 320px;
  object-fit: cover;
  border-radius: 22px;
`;

const Content = styled.div`
  display: grid;
  gap: 14px;
  align-content: start;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 34px;
  color: #2d1b12;
`;

const Text = styled.p`
  margin: 0;
  color: #000000bd;
  line-height: 1.6;
`;

const LinkVideo = styled.a`
  width: fit-content;
  padding: 12px 18px;
  border-radius: 14px;
  background: #c7fffebc;
  color: #072355;
  font-weight: 700;
  text-decoration: none;
`;

export default function ExternalRecipeCard({ receita }) {
  const instrucoesResumidas =
    receita.instrucoes.length > 700
      ? `${receita.instrucoes.slice(0, 700)}...`
      : receita.instrucoes;

  return (
    <Card>
      <Image src={receita.imagem} alt={receita.titulo} />

      <Content>
        <span className="tag">Receita externa</span>

        <Title>{receita.titulo}</Title>

        <Text>
          <strong>Categoria:</strong> {receita.categoria}
        </Text>

        <Text>
          <strong>Origem:</strong> {receita.origem}
        </Text>

        <Text>{instrucoesResumidas}</Text>

        {receita.video && (
          <LinkVideo href={receita.video} target="_blank" rel="noreferrer">
            Ver vídeo da receita
          </LinkVideo>
        )}
      </Content>
    </Card>
  );
}