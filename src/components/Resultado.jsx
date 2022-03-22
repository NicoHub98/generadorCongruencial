import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Resultado = () => {
  const { arrayResultado } = useContext(GlobalContext);

  return (
    <>
      <div className="container my-3">
        <h4 className="text-center">Resultados</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Pos.</th>
              <th scope="col">Semilla</th>
              <th scope="col">N° Generado</th>
            </tr>
          </thead>
          <tbody>
            {React.Children.toArray(
              arrayResultado.map(({ id, arraySeed, arrayRes }) => (
                <tr>
                  <th scope="row">{id}</th>
                  <td>{arraySeed}</td>
                  <td>{arrayRes}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Resultado;
