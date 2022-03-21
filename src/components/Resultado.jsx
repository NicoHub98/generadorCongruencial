import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Resultado = () => {
  const { arrayResultado } = useContext(GlobalContext);

  return (
    <>
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Pos.</th>
              <th scope="col">Semilla</th>
              <th scope="col">Resultado</th>
            </tr>
          </thead>
          <tbody>
            {React.Children.toArray(
              arrayResultado.map(({ i, arraySeed, arrayRes }) => (
                <tr>
                  <td>{i}</td>
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
