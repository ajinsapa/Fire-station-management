import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Typography() {
  return (
    <>
      <div className="section">
        <Container>
          <h3 className="title ">Features:</h3>
          <div id="typography">
            <Row>
              <Col md="12">
                <div className="typography-line">
                  <h5>
                    <strong>Centralized Dispatch System</strong>
                    
                  </h5>
                </div>
                <div className="typography-line">
                <h5>
                    <strong>Real-time Incident Reporting</strong>
                    
                  </h5>
                </div>
                <div className="typography-line">
                <h5>
                    <strong>Resource Management</strong>
                    
                  </h5>
                </div>
                <div className="typography-line">
                <h5>
                    <strong>Community Outreach and Education</strong>
                    
                  </h5>
                </div>
                <div className="typography-line">
                <h5>
                    <strong>Data Analytics and Reporting</strong>
                    
                  </h5>
                </div>
                <div className="typography-line">
                  
                  <blockquote>
                    <p className="blockquote blockquote-primary">
                     <b>  "Firefighters are indispensable foot soldiers here at home, protecting our fellow 
                      citizens, their property, and our communities from the ravages of fire and other disasters."{" "}
                      </b>   <br></br>
                      <br></br>
                      <small>-  Dianne Feinstein</small>
                    </p>
                  </blockquote>
                </div>
                <div className="typography-line">
                  <h1>Reviews</h1>
                  <p   >
               <b> 
               <span>  <b  className="text-black" >Abay</b> </span>The firefighters at Novo Fire and Rescue Services are true heroes! They responded quickly when my house caught fire and saved our family and pets. Forever grateful!
               </b>  </p>
                
                     
                </div>
              
                <div className="typography-line">
                  <span> <b  className="text-black" >Benny</b></span>
                  <p className="text-muted">
                    <b> 
                  Our local fire station always goes above and beyond! They regularly engage with the community, offering fire safety workshops and participating in neighborhood events. Thank you for keeping us safe!
                  </b>    </p>
                </div>
                <div className="typography-line">
                  <span>   <b  className="text-black" >Geetha</b>           </span>
                  <p className="text-primary">  <b> 
                  I called 0120 when my husband had a heart attack, and the paramedics from Novo Fire And Rescue Services arrived within minutes. Their professionalism and expertise saved his life. Thank you!
                  </b>     </p>
                </div>
                <div className="typography-line">
                  <span><b  className="text-black" >Ashik</b></span>
                  <p className="text-info"> <b> 
                  I had to call the fire department for a minor kitchen fire, and they handled the situation swiftly and professionally. Grateful for their prompt response and expertise.
                  </b>        </p>
                </div>
                <div className="typography-line">
                  <span><b  className="text-black" >Hemin</b></span>
                  <p className="text-success"> <b> 
                  I'm proud to be part of the team at Novo Fire  And Rescue  Services. Our colleagues are dedicated, skilled professionals who work tirelessly to serve our community and save lives every day.
                  </b>    </p>
                </div>
                <div className="typography-line">
                  <span><b  className="text-black" >Shilpa</b></span>
                  <p className="text-warning"> <b> 
                  The leadership at our fire station is top-notch. They prioritize our safety, well-being, and professional development, fostering a positive work environment where we can thrive and excel in our roles.
                  </b>   </p>
                </div>
                <div className="typography-line">
                  <span><b  className="text-black" >Listin</b></span>
                  <p className="text-danger"> <b> 
                  The camaraderie among firefighters is unparalleled. We trust and support each other like family, which is essential when facing high-stress situations on the job.
                  </b>   </p>
                </div>
                
              </Col>
            </Row>
          </div>
          <div className="space-50"></div>
          <div id="images">
            <h4>Some of Rescue Operations</h4>
            <Row>
              <Col sm="2">
                <p className="category"></p>
                <img
                  alt="..."
                  className="rounded "
                  src={require("assets/img/virtual_visitor_day_hero-2880-02643b (1).jpg")}
                ></img>
              </Col>
              <Col sm="2">
                <img
                  alt="..."
                  className="rounded-circle"
                  src={require("assets/img/17338-file.jpeg")}
                ></img>
              </Col>
              <Col sm="2">
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/RO-vacant-house-fire.webp")}
                ></img>
              </Col>
              <Col sm="2">
                <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/images (2).jpeg")}
                ></img>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Typography;
