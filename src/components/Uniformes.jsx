import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Uniformes = () => {
  const { arrayResultado } = useContext(GlobalContext);

  return (
    <>
      <div className="container my-3">
        <h3 className="text-center">Uniformes</h3>
        <table className="table">
          <thead>
            <tr>
              <th>U[0;1]</th>
              <th>U[0;1)</th>
              <th>U(0;1)</th>
              <th>U(0;1]</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Uniformes;
