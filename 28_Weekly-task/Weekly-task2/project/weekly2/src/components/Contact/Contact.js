import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Container>
        <h1 className="text-white">Contact Us</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="contact">
            <Card className="movieImage"></Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
