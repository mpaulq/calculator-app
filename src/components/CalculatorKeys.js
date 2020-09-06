import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function CalculatorKeys({ handleClick }) {
  return (
    <Container>
      <Row>
        <Col xs={3} md={3}>
          <Row>
            <Col>
              <Button
                name="+"
                onClick={handleClick}
                variant={"info"}
                style={{ marginBottom: "5px" }}
                block
              >
                +
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                name="7"
                onClick={handleClick}
                variant={"light"}
                style={{ marginBottom: "5px" }}
                block
              >
                7
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                name="4"
                onClick={handleClick}
                variant={"light"}
                style={{ marginBottom: "5px" }}
                block
              >
                4
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                name="1"
                onClick={handleClick}
                variant={"light"}
                style={{ marginBottom: "5px" }}
                block
              >
                1
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button name="0" onClick={handleClick} variant={"light"} block>
                0
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={3} md={3}>
          <Row>
            <Col>
              <Button
                name="-"
                onClick={handleClick}
                variant={"info"}
                style={{ marginBottom: "5px" }}
                block
              >
                -
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                name="8"
                onClick={handleClick}
                variant={"light"}
                style={{ marginBottom: "5px" }}
                block
              >
                8
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                name="5"
                onClick={handleClick}
                variant={"light"}
                style={{ marginBottom: "5px" }}
                block
              >
                5
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                name="2"
                onClick={handleClick}
                variant={"light"}
                style={{ marginBottom: "5px" }}
                block
              >
                2
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button name="." onClick={handleClick} variant={"light"} block>
                .
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={3} md={3}>
          <Row>
            <Col>
              <Button
                name="*"
                onClick={handleClick}
                variant={"info"}
                style={{ marginBottom: "5px" }}
                block
              >
                &times;
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                name="9"
                onClick={handleClick}
                variant={"light"}
                style={{ marginBottom: "5px" }}
                block
              >
                9
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                name="6"
                onClick={handleClick}
                variant={"light"}
                style={{ marginBottom: "5px" }}
                block
              >
                6
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                name="3"
                onClick={handleClick}
                variant={"light"}
                style={{ marginBottom: "5px" }}
                block
              >
                3
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button name="AC" onClick={handleClick} variant={"danger"} block>
                AC
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={3} md={3}>
          <Row>
            <Col>
              <Button
                name="/"
                onClick={handleClick}
                variant={"info"}
                style={{ marginBottom: "5px" }}
                block
              >
                &divide;
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                name="="
                onClick={handleClick}
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
