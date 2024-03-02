import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function NucleoIcons() {
  return (
    <>
      <div className="section section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Resources</h2>
              <h5 className="description">
             <b>  At Novo Fire And Rescue Services, we recognize that our ability to fulfill our mission and safeguard the community depends on the resources available to us. We are committed to maintaining a robust inventory of equipment, skilled personnel, and ongoing training programs to ensure readiness and effectiveness in responding to emergencies.
             </b>   </h5>
              <Button
                className="btn-round mr-1"
                color="info"
                href="/landing-page"
                size="lg"
                target="_blank"
              >
                For More Click Here
              </Button>
              
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
              <i class="fa-solid fa-fire"></i>
              <i class="fa-solid fa-truck"></i>
                <i class="fa-solid fa-fire-flame-curved"></i>
                <i class="fa-solid fa-fire"></i>
                <i class="fa-solid fa-fire-extinguisher"></i>
                <i className="now-ui-icons emoticons_satisfied"></i>
                <i class="fa-solid fa-truck"></i>
                <i class="fa-solid fa-fire-extinguisher"></i>
                <i class="fa-solid fa-fire-extinguisher"></i>
                <i class="fa-solid fa-fire-flame-curved"></i>
                <i class="fa-solid fa-truck"></i>
                <i class="fa-solid fa-fire"></i>
                <i class="fa-solid fa-fire-extinguisher"></i>
                <i class="fa-solid fa-truck"></i>
                <i class="fa-solid fa-fire-extinguisher"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
