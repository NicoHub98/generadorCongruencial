import { useState } from "react";

function App() {
  const [seed, setSeed] = useState(7343);
  const [cteA, setCteA] = useState(4781);
  const [cteMult, setCteMult] = useState(9387);
  const [module, setModule] = useState(9999);

  return (
    <>
      <h1 className="text-center my-3">Calculadora Congruencial</h1>
      <div className="container">
        <form onSubmit="{}">
          {/* Seed */}
          <label htmlFor="seed" className="form-label">
            Semilla:
          </label>
          <input
            type="number"
            className="form-control w-25"
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
            className="form-control w-25"
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
            className="form-control w-25"
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
            className="form-control w-25"
            id="module"
            onChange={(e) => setModule(e.target.value)}
            value={module}
          />
        </form>
      </div>
    </>
  );
}

export default App;
