import React from "react";
import Card from "react-bootstrap/Card";

export default function CalculatorDisplay({ currentValue }) {
  return (
    <Card.Header as="h4" style={{ alignContent: "right" }}>
      {currentValue}
    </Card.Header>
  );
}
