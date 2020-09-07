import React, { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { evaluate } from "mathjs";

const initialValue = "0";

export default function App() {
  const [currentValue, setValue] = useState(initialValue);
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

  return (
    <Jumbotron fluid>
      <Container>
        <Row>
          <Col md></Col>
          <Calculator
            currentValue={currentValue}
            changeValue={changeValue}
            getResult={getResult}
            operator={operator}
            allClear={allClear}
          />
          <Col md></Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
