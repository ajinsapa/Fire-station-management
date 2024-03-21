import React from "react";
// react plugins that creates an input with a date picker
// reactstrap components
import {
  Button,
  Container,
  Modal,
  ModalBody,
  Row,
  Col,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";

// core components

function Javascript() {
  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  return (
    <>
      <div className="section section-javascript" id="javascriptComponents">
        <Container>
          <h3 className="title">Emergency Preparedness</h3>
          <Row id="modals">
            <Col md="6" className="mt-4">
              <Button
                color="primary"
                className="mr-1"
                onClick={() => setModal1(true)}
              >
               Evacuation Plans
              </Button>
              <Button color="info" onClick={() => setModal2(true)}>
                For More Details
              </Button>
              <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Evacuation Plans</h4>
                </div>
                <ModalBody>
                  <p>
                 <b> Provide step-by-step instructions for creating and implementing evacuation plans. Include details such as:

<br />
*Identifying escape routes <br />
*Designating meeting points <br />
*Establishing communication procedures <br />
*Assigning responsibilities to family members or employees <br />
*Practicing evacuation drills regularly </b> 
                  </p>
                </ModalBody>
                <div className="modal-footer">
                 
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
              <Modal
                modalClassName="modal-mini modal-info"
                toggle={() => setModal2(false)}
                isOpen={modal2}
              >
                <div className="modal-header justify-content-center">
                  <div className="modal-profile">
                    <i className="now-ui-icons users_circle-08"></i>
                  </div>
                </div>
                <ModalBody>
                  <p>Please Sign Up</p>
                </ModalBody>
                <div className="modal-footer">
                
                  <Button
                    className="btn-neutral"
                    color="link"
                    type="button"
                    onClick={() => setModal2(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
            </Col>
            <Col md="6">
              <h4>Emergency Contact Numbers</h4>
              <Button
                color="default"
                id="tooltip175489643"
                type="button"
                className="mr-1"
              >
                Emergency
              </Button>
              <UncontrolledPopover
                placement={window.innerWidth < 768 ? "top" : "left"}
                target="tooltip175489643"
                className="popover-primary"
              >
                <PopoverHeader>Emergency Contact Number</PopoverHeader>
                <PopoverBody>
              * Emergency:  0120 (for fire, rescue, and medical emergencies)  <br />
*Non-emergency: 101 (for reporting non-urgent incidents or seeking advice)
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                color="default"
                id="tooltip768569110"
                type="button"
                className="mr-1"
              >
                Police
              </Button>
              <UncontrolledPopover placement="top" target="tooltip768569110">
                <PopoverHeader>Police</PopoverHeader>
                <PopoverBody>
                *Emergency: 100  (for crimes in progress, emergencies, and life-threatening situations)
*Non-emergency: 112 (for reporting non-urgent crimes or incidents)

                </PopoverBody>
              </UncontrolledPopover>
              <Button
                color="default"
                id="tooltip966745638"
                type="button"
                className="mr-1"
              >
               Ambulance Service
              </Button>
              <UncontrolledPopover
                placement={window.innerWidth < 768 ? "bottom" : "right"}
                target="tooltip966745638"
              >
                <PopoverHeader>Ambulance Service</PopoverHeader>
                <PopoverBody>
                *Emergency: 101 (for medical emergencies, accidents, and injuries) <br />
*Non-emergency: 111 (for medical advice and non-life-threatening emergencies)

                </PopoverBody>
              </UncontrolledPopover>
              <Button color="default" id="tooltip822900491" type="button"  className="mr-2">
              Gas Emergency Service
              </Button>
              <UncontrolledPopover placement="bottom" target="tooltip822900491">
                <PopoverHeader>Gas Emergency Service:</PopoverHeader>
                <PopoverBody>
                Emergency: 080  999 (National Gas Emergency Service - for reporting gas leaks or suspected gas emergencies)
                </PopoverBody>
              </UncontrolledPopover>
              <Button color="default" id="tooltip822900491" type="button"   >
              Electricity Emergency
              </Button   >
              <UncontrolledPopover placement="bottom" target="tooltip822900491">
                <PopoverHeader>Electricity Emergency</PopoverHeader>
                <PopoverBody>
                Emergency: 105 (National Power Cut Helpline - for reporting power cuts and electricity emergencies)                </PopoverBody>
              </UncontrolledPopover>
              
            </Col>
            <br></br>
            <br></br>
           
                
            <Col md="6">
             
              
              
            
              <br></br>
              <br></br>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Javascript;
