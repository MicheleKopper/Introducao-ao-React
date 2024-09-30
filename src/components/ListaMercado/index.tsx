import { propsTabela, Tabela } from "../Tabela";

export default function ListaMercado() {
  const listaMercado: propsTabela[] = [
    {
      itemCol1: "farinha",
      itemCol2: "2 kg",
      buttonLink: "/PrecoFarinha",
    },
    {
      itemCol1: "açucar",
      itemCol2: "1 kg",
      buttonLink: "/PrecoAcucar",
    },
    {
      itemCol1: "ovos",
      itemCol2: "12 un",
      buttonLink: "/PrecoOvos",
    },
  ];

  return (
    <>
      <Tabela
        titleCol1="Item"
        titleCol2="Quantidade"
        titleCol3="Preço"
        tableBody={listaMercado}
      />
    </>
  );
}
