import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Uniformes = () => {
  const { arrayUniforme } = useContext(GlobalContext);

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
            {React.Children.toArray(
              arrayUniforme.map(({ cc, ca, aa, ac }) => (
                <tr>
                  <td>
                    {(cc = Math.trunc(cc * Math.pow(10, 8)) / Math.pow(10, 8))}
                  </td>
                  <td>
                    {(ca = Math.trunc(ca * Math.pow(10, 8)) / Math.pow(10, 8))}
                  </td>
                  <td>
                    {(aa = Math.trunc(aa * Math.pow(10, 8)) / Math.pow(10, 8))}
                  </td>
                  <td>
                    {(ac = Math.trunc(ac * Math.pow(10, 8)) / Math.pow(10, 8))}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Uniformes;
