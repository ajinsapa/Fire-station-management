import React, { useState } from 'react';
import './TeamListing.css'
import StationNav from '../StationNav';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';



const TeamListing = () => {
 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (

    <div className='b' > 
    <StationNav></StationNav>
    <div className='team m-5  '  style={{ border: '5px solid red',backgroundColor:"beige", padding: '50px' }}>
      <h2 style={{ textAlign: 'center',color:"black" }}>Assign Team</h2>
      
      <FloatingLabel  style={{color:"black"}} controlId="floatingPassword">
        <Form.Control type="number" placeholder="Incident Number" />
      </FloatingLabel> 
      
      <FloatingLabel  style={{color:"black"}} controlId="floatingPassword">
        <Form.Control type="number" placeholder="Team Name" />
      </FloatingLabel>
      <FloatingLabel  style={{color:"black"}} controlId="floatingPassword">
        <Form.Control type="number" placeholder="Vehicles" />
      </FloatingLabel>
      <FloatingLabel  style={{color:"black"}} controlId="floatingPassword">
        <Form.Control type="number" placeholder="Equipments" />
      </FloatingLabel>
     
      <div className="d-flex justify-content-between  "  style={{ marginTop: '100px' }}>
          <Button style={{ backgroundColor: 'red' }}   href="/team-list" > Teams</Button>
          <Button  onClick={handleShow} style={{ backgroundColor: 'red' }}>Team Creation</Button>
          <Button style={{ backgroundColor: 'red' }}>Add</Button>
        </div>
    </div>
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header >
          <Modal.Title  style={{color:"red"}}>Team Creation</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel  style={{color:"black"}} controlId="floatingPassword">
        <Form.Control type="number" placeholder="Team Name" />
      </FloatingLabel> 
      <FloatingLabel  style={{color:"black"}} controlId="floatingPassword">
        <Form.Control type="number" placeholder="Number of Employees" />
      </FloatingLabel> 


        </Modal.Body>
        <Modal.Footer>
          <Button  style={{ backgroundColor: 'red' }} variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  style={{ backgroundColor: 'red' }} variant="primary" onClick={handleClose}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TeamListing;
