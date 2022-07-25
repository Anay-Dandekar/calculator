import { useContext } from "react";
import CalculatorContext from "../context/CalculatorContext";

function DisplayEquation() {
  const { equation } = useContext(CalculatorContext);

  return (
    <div>
      <input type="text" readOnly value={equation.join(" ")} />
    </div>
  );
}

export default DisplayEquation;
