import ListaMercado from "../components/ListaMercado";
import { Section } from "../components/Section/Section";

function ListaMercadoPage() {
  return (
    <>
      <Section>
        <div className="container">
          <h1>Lista de compras</h1>
          <ListaMercado />
        </div>
      </Section>
    </>
  );
}

export default ListaMercadoPage;
