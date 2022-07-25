import { createContext, useReducer } from "react";
import calculatorReducer from "./CalculatorReducer";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const initialState = {
    firstVal: 0,
    secondVal: 0,
    operation: "",
    equation: [0],
  };
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  const buttonValues = [
    7,
    8,
    9,
    "+",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "*",
    0,
    "=",
    "AC",
    "/",
  ];

  return (
    <CalculatorContext.Provider value={{ ...state, dispatch, buttonValues }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContext;
