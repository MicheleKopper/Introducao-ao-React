import { Link } from "react-router-dom";
import "./styles.css";
import ButtonDefault from "../Button/ButtonDefault";

interface props {
  titleCol1: string;
  titleCol2: string;
  titleCol3: string;
  tableBody: Array<propsTabela>;
}

export interface propsTabela {
  itemCol1: string;
  itemCol2: string;
  buttonLink: string;
}

export function Tabela(props: props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">{props.titleCol1}</th>
            <th scope="col">{props.titleCol2}</th>
            <th scope="col">{props.titleCol3}</th>
          </tr>
        </thead>
        <tbody>
          {props.tableBody.map((recado) => {
            return (
              <tr>
                <td>{recado.itemCol1}</td>
                <td>{recado.itemCol2}</td>
                <td>
                  <Link to={recado.buttonLink}>
                    <ButtonDefault title="Conferir"></ButtonDefault>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
