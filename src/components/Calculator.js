import React, { useState } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKeys from "./CalculatorKeys";
import { evaluate } from "mathjs";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Calculator({ initialValue }) {
  const [currentValue, setValue] = useState(initialValue || '0');
  const [overwrite, setOverwrite] = useState(true);

  const changeValue = (button) => {
    if (overwrite) {
      setValue(button);
      setOverwrite(false);
    } else {
      if (currentValue[currentValue.length - 1] === button && button === ".")
        setValue(currentValue);
      else setValue(currentValue + button);
    }
  };

  const getResult = () => {
    try {
      const result = evaluate(currentValue);
      if (isNaN(result)) throw new Error("Not a number");
      setValue(result);
    } catch (err) {
      setValue("Error");
    }
    setOverwrite(true);
  };

  const operator = (operation) => {
    if (currentValue === initialValue) {
      setOverwrite(false);
      switch (operation) {
        case "-":
          return setValue(operation);
        default:
          return setValue(currentValue + operation);
      }
    } else if (
      ["*", "/", "+"].includes(currentValue[currentValue.length - 1]) &&
      currentValue !== "Error"
    ) {
      setOverwrite(false);
      switch (operation) {
        case "-":
          return setValue(currentValue + operation);
        default:
          const newVal = currentValue.slice(0, -1);
          return setValue(newVal + operation);
      }
    } else if (currentValue !== "Error") {
      setValue(currentValue + operation);
      setOverwrite(false);
    }
  };

  const allClear = () => {
    setValue(initialValue);
    setOverwrite(true);
  };

  const handleButton = (e) => {
    switch (e.target.name) {
      case "+":
      case "-":
      case "*":
      case "/":
        return operator(e.target.name);
      case "AC":
        return allClear();
      case "=":
        return getResult();
      default:
        return changeValue(e.target.name);
    }
  };

  return (
    <Col xs={12} md={5}>
      <Card
        bg={"dark"}
        text={"light"}
        className="text-right"
        style={{ marginBottom: "1em" }}
      >
        <CalculatorDisplay currentValue={currentValue} />
      </Card>
      <CalculatorKeys handleClick={handleButton} />
    </Col>
  );
}
