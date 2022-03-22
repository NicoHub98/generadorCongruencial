import React, { useState } from "react";

const Formula = () => {
  const [verFormula, setVerFormula] = useState(false);

  return (
    <div className="container text-center ">
      <button
        className="btn btn-light mb-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
        onClick={() => setVerFormula(!verFormula)}
      >
        {verFormula ? "Cerrar" : "Ver Fórmula"}
      </button>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <img
            className="rounded mx-auto d-block"
            src="http://www.alciro.org/cgi/tex.cgi?x_{a}=\frac{C+(A\times X_{i})}{M}"
            title="x_{a}=\frac{C+(A\times X_{i})}{M}"
            border="0"
            width="100px"
            height="25px"
            alt="Fórmula"
          />
          <p>
            Los generadores congruenciales generan una secuencia de números
            pseudoaleatorios en la cual el próximo número pseudoaleatorio es
            determinado a partir del último número generado, es decir, el número
            pseudoaleatorio Xn+1 es derivado a partir del número pseudoaleatorio
            Xn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Formula;
