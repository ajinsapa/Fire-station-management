import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Images() {
  return (
    <>
      <div className="section section-images">
        <Container>
          <Row>
            <Col md="12">
              <div className="hero-images-container">
                <img
                  alt="..."
                  src={require("assets/img/Class-1-2022-Passout-179-750x545.jpg")}
                ></img>
              </div>
              <div className="hero-images-container-1">
                <img
                  alt="..."
                  src={require("assets/img/Bdbusinessfinder.jpg")}
                ></img>
              </div>
              <div className="hero-images-container-2">
                <img
                  alt="..."
                  src={require("assets/img/istockphoto-96769282-612x612.jpg")}
                ></img>
                
              </div>
            </Col>

          </Row>
        <div  className="py-5" style={{width:'50%',height:"500px"}} >

<Row  className="py-5">


<Col>

<iframe width="1100" height="300" src="https://www.youtube.com/embed/noSybfYPplU" title="Fire Station Move" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</Col>




</Row>






        </div>
        </Container>
      </div>
    </>
  );
}

export default Images;
