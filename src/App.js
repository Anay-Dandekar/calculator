import { CalculatorProvider } from "./context/CalculatorContext";
import DisplayEquation from "./components/DisplayEquation";
import NumPad from "./components/NumPad";

function App() {
  return (
    <CalculatorProvider>
      <DisplayEquation />
      <NumPad />
    </CalculatorProvider>
  );
}

export default App;
