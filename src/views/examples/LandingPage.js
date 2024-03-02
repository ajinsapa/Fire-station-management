import React from "react";

// reactstrap components
import {
 
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description">
               <b> Welcome to Nova Fire And Rescue Services, your trusted partner in fire protection and emergency response solutions. As a leading provider of private fire station services, we are dedicated to safeguarding lives, property, and assets with our expertise, innovation, and commitment to excellence.
<br /> <br />
At Nova, we understand the importance of proactive fire prevention, rapid emergency response, and effective risk management. Our team of highly trained professionals specializes in providing comprehensive fire protection services tailored to the unique needs and challenges of our clients.
<br /> <br />

At Nova, safety is our top priority, and we strive to build lasting partnerships based on trust, integrity, and accountability. Whether you're seeking comprehensive fire protection services, specialized training programs, or expert consulting advice, you can rely on us to deliver superior solutions tailored to your needs.
             <br /><br />

             Explore our website to learn more about our services, meet our team, and discover how we can help you enhance fire safety, minimize risk, and achieve peace of mind. Contact us today to discuss your fire protection needs and partner with the industry leader in private fire station services. 
              
              
               </b>
               
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/pngtree-firefighter-fighting-with-fire-and-burnt-barn-fire-scene-picture-image_2634088.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      
"I can think of no more stirring symbol of man's humanity to man than a fire station." <br></br>
                      <br></br>
                      <small> - Kurt Vonnegut</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/banner_19.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/233349.jpg") + ")"
                    }}
                  ></div>
                  <h3>
                    
For fire station management, developing and implementing effective evacuation plans is crucial to ensure the safety of personnel, visitors, and the surrounding community during emergencies. Here's a method for creating evacuation plans tailored specifically for fire station management:
                  </h3>
                  <p>
                    
<b> For fire station management, developing and implementing effective evacuation plans is crucial to ensure the safety of personnel, visitors, and the surrounding community during emergencies. Here's a method for creating evacuation plans tailored specifically for fire station management:
</b><b>   <br />
Assessment and Analysis:

Conduct a thorough assessment of the fire station's facilities, including the main building, apparatus bays, training areas, living quarters, and any auxiliary structures.
Identify potential hazards, such as fire risks, hazardous materials, structural weaknesses, and environmental factors that may impact evacuation procedures.
Analyze the layout of the premises, including exits, evacuation routes, emergency exits, stairwells, and assembly points.
</b>      </p>
                  <p>
               <b>    Risk Identification:

Identify specific risks and scenarios that may necessitate evacuation, such as fires, chemical spills, gas leaks, structural collapses, severe weather events, or other emergencies.
Consider the unique challenges and vulnerabilities of the fire station environment, including the presence of firefighting equipment, hazardous materials, and specialized vehicles.
</b>     </p>
                  <p>
             <b>       Development of Evacuation Plans:

Develop comprehensive evacuation plans tailored to the specific needs and circumstances of the fire station. Consider the following elements:
Primary and secondary evacuation routes for different areas of the premises.
Designated assembly points for personnel and visitors to gather safely after evacuating.
Procedures for assisting individuals with disabilities, injuries, or mobility limitations during evacuation.
Communication protocols for alerting personnel and coordinating evacuation efforts.
Assignments of responsibilities to key personnel, including evacuation wardens, floor marshals, and incident commanders.
Protocols for accounting for all personnel and visitors during and after evacuations.</b>
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
        </div>
        <div className="section section-contact-us text-center">
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
