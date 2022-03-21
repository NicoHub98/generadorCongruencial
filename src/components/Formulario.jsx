import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Formulario = () => {
  const {
    seed,
    setSeed,
    cteC,
    setCteC,
    cteMult,
    setCteMult,
    module,
    setModule,
    iteraciones,
    setIteraciones,
    handleSubmit,
    setArrayResultado,
  } = useContext(GlobalContext);

  return (
    <>
      <div className="container sticky-top">
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
          {/* Cte. C */}
          <label htmlFor="cteC" className="form-label mt-3">
            Constante C:
          </label>
          <input
            type="number"
            className="form-control"
            id="cteC"
            onChange={(e) => setCteC(e.target.value)}
            value={cteC}
          />
          {/* Cte. Multiplicadora A */}
          <label htmlFor="cteMult" className="form-label mt-3">
            Constante Multiplicadora A:
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
          <div className="position-relative">
            <button type="submit" className="btn btn-primary my-3">
              Resolver
            </button>
            <button
              type="button"
              className="btn btn-primary my-3 position-absolute top-0 end-0"
              onClick={() =>
                setArrayResultado([{ id: 0, arraySeed: 0, arrayRes: 0 }])
              }
            >
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Formulario;
