import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function CompleteExamples() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">Do you Interested In Our Site???</h2>
              <h5 className="description">
              <b> If you want to creates incidents,view incident status and add feedback <br /> </b>   <b style={{color:'Red'}} > Please SignUp </b>
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CompleteExamples;
