import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
  return (
    <Jumbotron fluid>
      <Container>
        <Row>
          <Col md></Col>
          	<Calculator/>
          <Col md></Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
