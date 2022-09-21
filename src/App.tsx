import { useState } from "react";
import styles from "./App.module.css";
import abacoImg from "./assets/abaco.png";
import { levels, calculateImc } from "./helpers/imc";

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const handleCalculate = () => {
    if(heightField && weightField){

    } else{
      alert ("Digite todos os campos.")
    }
  }
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={abacoImg} alt="" width={40} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>
            O Índice de Massa Corporal (IMC) é reconhecido pela Organização
            Mundial da Saúde (OMS) como um padrãointernacional que avalia se as
            pessoas, entre 20 e 59 anos, estão com peso ideal.
          </p>
          <input 
            type="number"
            placeholder="Digite a sua altura. Ex: 74.3 (em métros)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
          />

          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 1.6 (em kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculate}>Calcular</button>
        </div>
        <div className={styles.rightSide}>...</div>
      </div>
    </div>
  );
};

export default App;
