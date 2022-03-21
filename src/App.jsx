import { useEffect, useState } from "react";
import Formula from "./components/Formula";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Uniformes from "./components/Uniformes";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const [seed, setSeed] = useState(7343);
  const [cteC, setCteC] = useState(4781);
  const [cteMult, setCteMult] = useState(9387);
  const [module, setModule] = useState(9999);
  const [iteraciones, setIteraciones] = useState(4);
  const [arrayResultado, setArrayResultado] = useState([
    {
      id: 0,
      arraySeed: 0,
      arrayRes: 0,
    },
  ]);
  const [arrayUniforme, setArrayUniforme] = useState([
    { cc: 0, ca: 0, aa: 0, ac: 0 },
  ]);
  const handleSubmit = (e, iteraciones) => {
    e.preventDefault();
    let _seed = seed,
      _cteC = cteC,
      _cteMult = cteMult,
      _module = module;
    let newArray = [{ arraySeed: 0, arrayRes: 0 }];
    let newArrayU = [{ cc: 0, ca: 0, aa: 0, ac: 0 }];

    //  Fórmula
    for (let i = 0; i < iteraciones; i++) {
      let calc = _seed * _cteMult + Number(_cteC);
      let calcDiv = (_seed * _cteMult + Number(_cteC)) / _module;
      let total = calc - _module * Math.trunc(calcDiv);
      if (i == 0) {
        newArray = [{ id: i + 1, arraySeed: _seed, arrayRes: total }];
        newArrayU = [
          {
            cc: total / (module - 1),
            ca: total / module,
            aa: (total + 0.5) / module,
            ac: (total + 1) / module,
          },
        ];
      } else {
        newArray = [
          ...newArray,
          { id: i + 1, arraySeed: _seed, arrayRes: total },
        ];
        newArrayU = [
          ...newArrayU,
          {
            cc: total / (module - 1),
            ca: total / module,
            aa: (total + Number(0.5)) / module,
            ac: (total + Number(1)) / module,
          },
        ];
      }
      _seed = total;
    }
    console.log(newArrayU);
    setArrayResultado(newArray);
    setArrayUniforme(newArrayU);
    let y = 0.4545488888888;
    y = Math.trunc(y * Math.pow(10, 8)) / Math.pow(10, 8);
    console.log(y);
  };

  return (
    <GlobalContext.Provider
      value={{
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
        arrayResultado,
        setArrayResultado,
        arrayUniforme,
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
        <div className="col-md-4">
          <Formula />
          <Uniformes />
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
