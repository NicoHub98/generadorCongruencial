import React from "react";

const Formula = () => {
  return (
    <div className="container text-center ">
      <h4>Fórmula general</h4>
      <img
        className="img-fluid "
        src="http://www.alciro.org/cgi/tex.cgi?x_{a}=\frac{C+(A\times X_{i})}{M}"
        title="x_{a}=\frac{C+(A\times X_{i})}{M}"
        border="0"
      />
      <p>
        Los generadores congruenciales generan una secuencia de números
        pseudoaleatorios en la cual el próximo número pseudoaleatorio es
        determinado a partir del último número generado, es decir, el número
        pseudoaleatorio Xn+1 es derivado a partir del número pseudoaleatorio Xn
      </p>
    </div>
  );
};

export default Formula;
