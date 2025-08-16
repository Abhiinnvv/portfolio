import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiGithub,
  SiGeeksforgeeks,
  SiHackerrank,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
<Col xs={4} md={2} className="tech-icons">
        <SiGeeksforgeeks />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHackerrank />
      </Col>
    </Row>
  );
}

export default Toolstack;
