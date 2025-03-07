import "./App.css";
import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculation = (operator) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Please enter valid numbers");
      return;
    }

    switch (operator) {
      case "+":
        setResult(n1 + n2);
        break;
      case "-":
        setResult(n1 - n2);
        break;
      case "*":
        setResult(n1 * n2);
        break;
      case "/":
        setResult(n2 !== 0 ? n1 / n2 : "Cannot divide by zero");
        break;
      default:
        setResult(null);
    }
  };
  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <button onClick={() => handleCalculation("+")}>+</button>
      <button onClick={() => handleCalculation("-")}>-</button>
      <button onClick={() => handleCalculation("*")}>*</button>
      <button onClick={() => handleCalculation("/")}>/</button>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;
