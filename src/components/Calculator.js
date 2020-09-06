import React from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKeys from "./CalculatorKeys";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Calculator({
  currentValue,
  changeValue,
  operator,
  allClear,
  getResult,
}) {
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
