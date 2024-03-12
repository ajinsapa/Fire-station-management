import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import EmployeeNav from './EmployeeNav';
import './Employee.css'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';




const EmployeeDashboard = () => {
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div   > 
        <EmployeeNav></EmployeeNav>
    <Container>
      <h1 className="mt-4  emp   mb-4">Employee Dashboard</h1>
      <Row>
        <Col md="4">
          <Card   className='caard1' >
            <CardBody   className='card-body2' >
              <CardTitle   className='vehiclelistadd' >  <b  style={{color:"Red"}} >Vehicles  </b>  </CardTitle>
              <CardText>
                
                
              <Form   className='form1'  noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col}  controlId="validationCustom01">
          <Form.Label   >   <b>Name  </b> </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            defaultValue="Name"
          />
        </Form.Group>
        <Form.Group as={Col}  controlId="validationCustom02">
          <Form.Label> <b>Number </b> </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Number"
            defaultValue="Number"
          />
         
         
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label> <b>Availability  </b> </Form.Label>
          <Form.Control type="text" placeholder="Availability" required />
         
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label> <b>Equipments  </b> </Form.Label>
          <Form.Control type="text" placeholder="Equipments" required />
         
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        
      </Form.Group>
      <Button   className='mb-5' type="submit">Add</Button>
    </Form>
                
                
                
                
                </CardText>
              
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card   className='caard1' >
            <CardBody className='card-body2' >
              <CardTitle className='vehiclelistadd' >  <b  style={{color:"Red"}} >Equipments </b> </CardTitle>
              <CardText>


              <Form   className='form1'  noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col}  controlId="validationCustom01">
          <Form.Label   >   <b>Name  </b> </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            defaultValue="Name"
          />
        </Form.Group>
        <Form.Group as={Col}  controlId="validationCustom02">
          <Form.Label> <b>Quantity </b> </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Number"
            defaultValue="Number"
          />
         
         
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label> <b>Maintenance </b> </Form.Label>
          <Form.Control type="text" placeholder="Availability" required />
         
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label> <b>Expire On  </b> </Form.Label>
          <Form.Control type="text" placeholder="Equipments" required />
         
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        
      </Form.Group>
      <Button className='mb-5'  type="submit">Add</Button>
    </Form>
                






              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card    >
            <CardBody className='card-body2'>
              <CardTitle className='vehiclelistadd' >  <b  style={{color:"Red"}} >Training Session</b></CardTitle>
              <CardText>              <Form   className='form1'  noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <div>

<img   style={{height:"150px",width:"100%"}}  src="https://i.postimg.cc/PqhG2rZL/fireman-firefighting-firefighter-fire-safety-fire-protection-engineering-publicity-fire-department-p.png" alt="" />

        </div>
         <h5 className='view'  >Training Videos</h5> <br />
         <Button  className='but ' href="/employeevideo-list" > View</Button>
        
      </Row>
      
      
    </Form>
                




</CardText>
              {/* Add a link/button to view shift schedule */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default EmployeeDashboard;
