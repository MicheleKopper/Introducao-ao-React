import { Link } from "react-router-dom";
import ButtonDefault from "../components/Button/ButtonDefault";
import { Section } from "../components/Section/Section";
import { Descricao } from "../components/Text/Descricao";
import { Preco } from "../components/Text/Preco";
import { Title } from "../components/Text/Title";

function PrecoAcucar() {
  return (
    <>
      <Section>
        <Title>Açúcar</Title>

        <Descricao>
          <p>
            O açúcar é um adoçante natural extraído principalmente da
            cana-de-açúcar ou da beterraba. Ele é amplamente utilizado para
            adoçar alimentos e bebidas, além de ser um ingrediente essencial em
            muitas receitas de sobremesas e produtos de panificação.
          </p>
        </Descricao>

        <Preco>
          <p>R$ 2,29 kg</p>
        </Preco>

        <Link to={"/"}>
          <ButtonDefault title="Voltar"></ButtonDefault>
        </Link>
      </Section>
    </>
  );
}

export default PrecoAcucar;
