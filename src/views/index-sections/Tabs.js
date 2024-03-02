import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");


  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row    className="section" >


<div  className="text-center"  style={{color:'black'}} >
<p>
  <strong>  Welcome to <b>NOVA FIRE AND RESCUE SERVICES </b>  , your trusted partner in fire protection and emergency response services. Located in the heart of Kochi, our station is dedicated to safeguarding lives, property, and the environment through prompt and professional emergency assistance.
  With a team of highly trained firefighters, emergency medical technicians, and support staff, we are committed to providing rapid and effective responses to fires, medical emergencies, hazardous material incidents, rescues, and other crises. Our mission is clear: to protect lives, property, and the environment through proactive fire prevention, education, and community engagement.

</strong>
  

</p>
<p>

<strong>

At <b>NOVA FIRE AND RESCUE SERVICES </b> , prevention is key. We offer a range of fire prevention programs, safety inspections, and educational resources to promote fire safety awareness and reduce the risk of emergencies in our community. Through partnerships with local schools, businesses, and community organizations, we work tirelessly to empower residents with the knowledge and resources they need to stay safe.


</strong>




</p>
<p>


<strong>

Our station is more than just a building; it's a hub of activity and a beacon of hope for those in need. From our state-of-the-art facilities to our dedicated team of professionals, we stand ready to answer the call, day or night.

</strong>



</p>

<p>
  <strong>
  Thank you!!!!!! for entrusting us with your safety. Together, let's continue to build a safer and stronger community for generations to come.

  </strong>

</p>

</div>




          </Row>
          <Row className="py-5" >
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Our Mission</p>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons objects_umbrella-13"></i>
                        Motto
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        <i className="  fa-solid fa-people-group"></i>
                        Team
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        <i className="now-ui-icons shopping_shop"></i>
                        Resources
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("4");
                        }}
                      >
<i class="fa-solid fa-address-book"></i>                        Contact
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <p>
                      <strong> At <b>NOVA FIRE AND RESCUE SERVICES</b>, our mission is to safeguard the lives, property, and environment of the residents and businesses of Kochi through proactive fire prevention, rapid emergency response, and community engagement. We are committed to upholding the highest standards of integrity, teamwork, and service excellence in everything we do.
                      </strong>   </p>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                        <b>

                        Get to know the dedicated firefighters, officers, and support staff who make up our team at <b>NOVO FIRE AND RESCUE SERVICES</b>. Our personnel are highly trained, experienced, and committed to serving the residents of London with professionalism, compassion, and courage.





                        </b>
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <p>
                        <b>Access valuable resources, such as fire safety tips, emergency preparedness guides, smoke alarm installation instructions, and contact information for local emergency services. Stay informed and empowered to protect yourself, your loved ones, and your property.</b>
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills4">
                      <p>
                        <b>Have questions, concerns, or feedback? Reach out to us directly via phone, email, or our online contact form. Our friendly and knowledgeable staff are here to assist you and address any inquiries you may have.</b>
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Our Services</p>
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        EMS
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                         Operations
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                         Public Education
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        Training
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>
                        <b>


                        Provide rapid medical assistance to individuals experiencing medical emergencies, injuries, or illnesses.
Administer first aid, CPR, and other life-saving interventions to stabilize patients and ensure their well-being until advanced medical care arrives.





                        </b>
                      </p>
                    </TabPane>
                    <TabPane tabId="pills2">
                      <p>
                       <b>
                       Conduct specialized rescue operations to extricate individuals trapped in vehicles, buildings, or hazardous environments.
Perform water rescues, high-angle rescues, trench rescues, and other technical rescues to save lives and prevent injuries.




                       </b>
                      </p>
                    </TabPane>
                    <TabPane tabId="pills3">
                      <p>
                        <b>






                        Educate the community about fire safety practices, emergency preparedness, and risk reduction strategies.
Conduct fire safety inspections, home safety assessments, and community outreach programs to promote fire prevention awareness and reduce fire-related injuries and fatalities.
                        </b>
                      </p>
                    </TabPane>
                    <TabPane tabId="pills4">
                      <p>
                        <b>

                        Provide ongoing training, education, and skills development opportunities for firefighters and emergency responders.
Stay current with the latest firefighting techniques, technologies, and best practices to ensure readiness and effectiveness in emergency situations.





                        </b>
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
