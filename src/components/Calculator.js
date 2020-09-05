import React from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKeys from "./CalculatorKeys";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Calculator() {
  return (
    <Col xs={12} md={5}>
      <Card
        bg={"dark"}
        text={"light"}
        className="text-right"
        style={{ marginBottom: "1em" }}
      >
        <CalculatorDisplay />
      </Card>
      <CalculatorKeys />
    </Col>
  );
}
