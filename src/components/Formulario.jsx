import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Formulario = () => {
  const {
    seed,
    setSeed,
    cteA,
    setCteA,
    cteMult,
    setCteMult,
    module,
    setModule,
    iteraciones,
    setIteraciones,
    handleSubmit,
  } = useContext(GlobalContext);

  return (
    <>
      <div className="container d-inline-block">
        <form onSubmit={(e) => handleSubmit(e, iteraciones)}>
          {/* Seed */}
          <label htmlFor="seed" className="form-label">
            Semilla:
          </label>
          <input
            type="number"
            className="form-control"
            id="seed"
            onChange={(e) => setSeed(e.target.value)}
            value={seed}
          />
          {/* Cte. A */}
          <label htmlFor="cteA" className="form-label mt-3">
            Constante A:
          </label>
          <input
            type="number"
            className="form-control"
            id="cteA"
            onChange={(e) => setCteA(e.target.value)}
            value={cteA}
          />
          {/* Cte. Multiplicadora */}
          <label htmlFor="cteMult" className="form-label mt-3">
            Constante Multiplicadora:
          </label>
          <input
            type="number"
            className="form-control "
            id="cteMult"
            onChange={(e) => setCteMult(e.target.value)}
            value={cteMult}
          />
          {/* Módulo M */}
          <label htmlFor="module" className="form-label mt-3">
            Módulo M:
          </label>
          <input
            type="number"
            className="form-control "
            id="module"
            onChange={(e) => setModule(e.target.value)}
            value={module}
          />
          {/* Iteraciones */}
          <label htmlFor="module" className="form-label mt-3">
            Cantidad de Iteraciones:
          </label>
          <input
            type="number"
            className="form-control "
            id="iteraciones"
            onChange={(e) => setIteraciones(e.target.value)}
            value={iteraciones}
          />
          <button type="submit" className="btn btn-primary my-3">
            Resolver
          </button>
        </form>
      </div>
    </>
  );
};

export default Formulario;
