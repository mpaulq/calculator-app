import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function CalculatorKeys() {
  return (
    <Container>
      <Row>
        <Col xs={3} md={3}>
          <Row>
            <Col>
              <Button variant={"info"} style={{ marginBottom: "5px" }} block>
                +
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant={"light"} style={{ marginBottom: "5px" }} block>
                7
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant={"light"} style={{ marginBottom: "5px" }} block>
                4
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant={"light"} style={{ marginBottom: "5px" }} block>
                1
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant={"light"} block>
                0
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={3} md={3}>
          <Row>
            <Col>
              <Button variant={"info"} style={{ marginBottom: "5px" }} block>
                -
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant={"light"} style={{ marginBottom: "5px" }} block>
                8
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant={"light"} style={{ marginBottom: "5px" }} block>
                5
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant={"light"} style={{ marginBottom: "5px" }} block>
                2
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant={"light"} block>
                .
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={3} md={3}>
          <Row>
            <Col>
              <Button variant={"info"} style={{ marginBottom: "5px" }} block>
                &times;
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant={"light"} style={{ marginBottom: "5px" }} block>
                9
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant={"light"} style={{ marginBottom: "5px" }} block>
                6
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant={"light"} style={{ marginBottom: "5px" }} block>
                3
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant={"danger"} block>
                AC
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={3} md={3}>
          <Row>
            <Col>
              <Button variant={"info"} style={{ marginBottom: "5px" }} block>
                &divide;
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant={"primary"}
                style={{ paddingTop: "4.4em", paddingBottom: "4.4em" }}
                block
              >
                =
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
