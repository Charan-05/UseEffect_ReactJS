import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);
  return (
    <>
      <p>Count of User Taps: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Click here to Count</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

export default Counter;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);
