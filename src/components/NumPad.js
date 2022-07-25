import { useContext } from "react";
import CalculatorContext from "../context/CalculatorContext";

function NumPad() {
  const { buttonValues, dispatch, operation, equation, firstVal, secondVal } =
    useContext(CalculatorContext);

  const handleClick = (value) => {
    if (typeof value == "number") {
      if (
        equation.join("").length + 1 < 14 &&
        secondVal.toString().length + 1 < 6 &&
        (equation.length == 2 || equation.length == 3)
      ) {
        dispatch({ type: "APPEND", payload: value });
      } else if (
        firstVal == "ERROR" ||
        (firstVal.toString().length + 1 < 6 && equation.length == 1)
      ) {
        dispatch({ type: "APPEND", payload: value });
      }
    } else if (value == "AC") {
      dispatch({ type: "CLEAR", payload: "all" });
    } else if (value == "=") {
      if (equation.length == 3) {
        if (operation == "+") {
          dispatch({ type: "ADD" });
        } else if (operation == "-") {
          dispatch({ type: "SUBTRACT" });
        } else if (operation == "*") {
          dispatch({ type: "MULTIPLY" });
        } else if (operation == "/") {
          if (secondVal == 0) {
            dispatch({ type: "DIVIDE_BY_ZERO" });
          } else {
            dispatch({ type: "DIVIDE" });
          }
        }
      }
      dispatch({ type: "CLEAR", payload: "some" });
    } else if (!operation || (operation && equation.length == 2)) {
      if ([firstVal, value, secondVal].join("").length < 14) {
        dispatch({ type: "SET_OPERATION", payload: value });
      }
    }
  };

  const numPadButton = (value, index) => (
    <button key={index} onClick={() => handleClick(value)}>
      {value}
    </button>
  );

  return (
    <div>
      {buttonValues.slice(0, 4).map(numPadButton)}
      <br />
      {buttonValues.slice(4, 8).map(numPadButton)}
      <br />
      {buttonValues.slice(8, 12).map(numPadButton)}
      <br />
      {buttonValues.slice(12, 16).map(numPadButton)}
    </div>
  );
}

export default NumPad;
