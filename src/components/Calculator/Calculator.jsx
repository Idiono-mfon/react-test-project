import { useState } from "react";
import { divide, multiply, substract, sum } from "utils/math-function";

const OPERATORS = ["+", "-", "*", "/"];

const Calculator = ({ defaultA, defaultB, defaultOperator }) => {
  const [inputValueA, setInputValueA] = useState(
    !defaultA || isNaN(defaultA) ? 0 : Number(defaultA)
  );

  const [inputValueB, setInputValueB] = useState(
    !defaultB || isNaN(defaultB) ? 0 : Number(defaultB)
  );

  const [operator, setOperator] = useState(
    OPERATORS.includes(defaultOperator) ? defaultOperator : "+"
  );

  const renderInputA = () => {
    return (
      <input
        data-testid="inputA"
        value={inputValueA}
        type="number"
        onChange={(e) => setInputValueA(Number(e.target.value))}
      />
    );
  };

  const renderInputB = () => {
    return (
      <input
        data-testid="inputB"
        type="number"
        value={inputValueB}
        onChange={(e) => setInputValueB(Number(e.target.value))}
      />
    );
  };

  const renderSelect = () => {
    return (
      <div>
        <select
          data-testid="operator"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>
    );
  };

  function divideSafely(a, b) {
    try {
      return divide(a, b);
    } catch (error) {
      return error.message;
    }
  }

  const getResult = (operator) => {
    switch (operator) {
      case "+":
        return sum(inputValueA, inputValueB);

      case "-":
        return substract(inputValueA, inputValueB);

      case "*":
        return multiply(inputValueA, inputValueB);
      case "/":
        return divideSafely(inputValueA, inputValueB);

      default:
        return "No operator provided.";
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ marginBottom: 40 }}>Calculator</h1>
      {renderInputA()}
      {renderSelect()}
      {renderInputB()}

      <h2 style={{ marginTop: 20 }}>Result:</h2>
      <span data-testid="result">{getResult(operator)}</span>
    </div>
  );
};

export default Calculator;
