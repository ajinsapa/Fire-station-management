import React, { useState } from 'react'
import Trainingtable from './Trainingtable'
import StationNav from '../StationNav'
import './TrainingList.css'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function TrainingList() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div   className='m1' >

        <StationNav></StationNav>

        <div>
<h1 className='pe-5 me-5 listing mt-5 head '   >Employees Attending Training Sessions</h1>

        </div>
<div   className='m-5 listing me-5' >

<Button className="animated-button  "   onClick={handleShow} >
      Add Sessions
    </Button>



</div>
<div className=' listingg m-5'  >



<Trainingtable></Trainingtable>





</div>




<Modal show={show} onHide={handleClose}>
        <Modal.Header    >
          <Modal.Title  className='text-center p-2 modal11'  >Training Sessions</Modal.Title>
        </Modal.Header>
        <Modal.Body>

     
        <FloatingLabel
        controlId="floatingInput"
        label=""
        className=" "
      >
<Form.Control type="text" placeholder="Name" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label=""  className=''>
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

      <FloatingLabel className=''   controlId="floatingPassword"    label="">
        <Form.Control type="text" placeholder="Video Url "name='videoUrl' />
      </FloatingLabel>



        </Modal.Body>
        <Modal.Footer>
       
          
          <Button variant="primary"  className='m-2' style={{backgroundColor:'brown'}} onClick={handleClose}>
           Add
          </Button>
          <Button variant="primary" href="/video-list" className='m-2' style={{backgroundColor:'brown'}} onClick={handleClose}>
            View List
          </Button>
          <Button   className='bg-danger' variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>




      
   

    </div>
    
  )
}

export default TrainingList