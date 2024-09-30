import { Link } from "react-router-dom";
import ButtonDefault from "../components/Button/ButtonDefault";
import { Descricao } from "../components/Text/Descricao";
import { Preco } from "../components/Text/Preco";
import { Title } from "../components/Text/Title";
import { Section } from "../components/Section/Section";

function PrecoFarinha() {
  return (
    <>
      <Section>
        <Title>Farinha</Title>

        <Descricao>
          <p>
            A farinha é um ingrediente essencial na cozinha, usada como base
            para pães, bolos e massas. Feita a partir de cereais
            moídos, como trigo, ela pode ser integral ou refinada, oferecendo
            versatilidade em diversas receitas.
          </p>
        </Descricao>

        <Preco>
          <p>R$ 5,99 kg</p>
        </Preco>

        <Link to={"/"}>
          <ButtonDefault title="Voltar"></ButtonDefault>
        </Link>
      </Section>
    </>
  );
}

export default PrecoFarinha;
