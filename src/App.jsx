import { useEffect, useState } from "react";
import Formula from "./components/Formula";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const [seed, setSeed] = useState(7343);
  const [cteA, setCteA] = useState(4781);
  const [cteMult, setCteMult] = useState(9387);
  const [module, setModule] = useState(9999);
  const [iteraciones, setIteraciones] = useState(4);
  const [arrayResultado, setArrayResultado] = useState([
    {
      arraySeed: 0,
      arrayRes: 0,
    },
  ]);
  let _seed = seed,
    _cteA = cteA,
    _cteMult = cteMult,
    _module = module;
  const handleSubmit = (e, iteraciones) => {
    // setArrayResultado([{ arraySeed: null, arrayRes: null }]);
    e.preventDefault();
    let newArray = [{ arraySeed: 0, arrayRes: 0 }];
    //Fórmula
    for (let i = 0; i < iteraciones; i++) {
      let calc = _seed + _cteA * _cteMult;
      console.log("seed: " + _seed);
      let calcDiv = (_seed + _cteA * _cteMult) / _module;
      let total = calc - _module * Math.trunc(calcDiv);
      console.log("total: " + total);
      if (i == 0) {
        newArray = [{ arraySeed: _seed, arrayRes: total }];
      } else {
        newArray = [...newArray, { arraySeed: _seed, arrayRes: total }];
      }
      _seed = total;
    }
    setArrayResultado(newArray);
    console.log(arrayResultado);
  };

  return (
    <GlobalContext.Provider
      value={{
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
        arrayResultado,
      }}
    >
      <h1 className="text-center my-3">Calculadora Congruencial</h1>

      <div className="row justify-content-md-center">
        <div className="col-md-4">
          <Formulario />
        </div>
        <div className="col-md-4">
          <Resultado />
        </div>
        <div className="col-md">
          <Formula />
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
