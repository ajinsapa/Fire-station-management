import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './IncidentList.css';
import StationNav from '../StationNav';
import { Col, Container, Form, Row } from "react-bootstrap";

function IncidentList() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

    const [status, setStatus] = useState(false);
  
    const handleStatusChange = () => {
      setStatus(!status); // Toggles the status between true and false
    };

 


  return (
    <div style={{ backgroundColor: "beige" }}>
      <StationNav />
      <div className='m-5 a5'>
        <ListGroup className="custom-list mt-5"  onClick={handleShowModal} >
          <ListGroup.Item className="custom-list-item"><b style={{ color: "Orange" }}>Date and Time :</b>  2024-02-19T18:40:00Z</ListGroup.Item>
          <ListGroup.Item className="custom-list-item"><b style={{ color: "Orange" }}>Location :</b> Kadavanthra, ernakulam</ListGroup.Item>
          <ListGroup.Item className="custom-list-item"><b style={{ color: "Orange" }}> Type: </b> Fire</ListGroup.Item>
          <ListGroup.Item className="custom-list-item"><b style={{ color: "Orange" }}> Intensity:</b> High </ListGroup.Item>
          <ListGroup.Item className="custom-list-item"><b style={{ color: "Orange" }}> Description: </b>  A car got on fire due to overheating while travelling</ListGroup.Item>
        </ListGroup>
       
      </div>

      <Modal show={showModal} onHide={handleCloseModal     }    >
        <Modal.Header >
          <Modal.Title   style={{color:"red"}} >Incident Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <ListGroup>
            <ListGroup.Item><b   style={{color:"black"}} >Date and Time:</b> 2024-02-19T18:40:00Z</ListGroup.Item>
            <ListGroup.Item><b style={{color:"black"}}  >Location:</b> Kadavanthra, ernakulam</ListGroup.Item>
            <ListGroup.Item><b style={{color:"black"}}  >Type:</b> Fire</ListGroup.Item>
            <ListGroup.Item><b style={{color:"black"}}  >Intensity:</b> High</ListGroup.Item>
            <ListGroup.Item><b style={{color:"black"}}  >Description:</b> A car got on fire due to overheating while travelling</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor:"red"}} variant="secondary" onClick={handleCloseModal}>
            Close
          </Button> 

          <Form>
      <Form.Check   
        type="switch"
        id="statusSwitch"
        className='btn btn'
        
        style={{backgroundColor:"Red",color:"White"}
    }
        label={status ? "Completed 👍 ": "Pending 😊"}
        checked={status}
        onChange={handleStatusChange}
      />
    </Form>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default IncidentList;
