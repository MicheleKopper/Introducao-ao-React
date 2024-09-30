import { Link } from "react-router-dom";
import ButtonDefault from "../components/Button/ButtonDefault";
import { Section } from "../components/Section/Section";
import { Descricao } from "../components/Text/Descricao";
import { Preco } from "../components/Text/Preco";
import { Title } from "../components/Text/Title";

function PrecoOvos() {
  return (
    <>
      <Section>
        <Title>Ovos</Title>

        <Descricao>
          <p>
            O ovo é um alimento versátil, rico em proteínas e nutrientes
            essenciais. Usado tanto em preparações doces quanto salgadas, ele é
            um ingrediente básico em diversas receitas, como bolos, massas e
            omeletes, além de ser consumido sozinho, cozido ou frito.
          </p>
        </Descricao>

        <Preco>
          <p>R$ 7,90 kg</p>
        </Preco>

        <Link to={"/"}>
          <ButtonDefault title="Voltar"></ButtonDefault>
        </Link>
      </Section>
    </>
  );
}

export default PrecoOvos;
