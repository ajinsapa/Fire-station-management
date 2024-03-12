import React from 'react'
import './ListingEmployees.css'
import EmployeeTable from './EmployeeTable'
import StationNav from '../StationNav'
import { Button } from 'reactstrap'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


function ListingEmployees() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div  className='f1'   >

<StationNav></StationNav>

<h1   className='text-center' style={{color:"yellow"}} >Employees List</h1>
<Button onClick={handleShow}  style={{backgroundColor:"red"}} className='p' >Add Employee</Button>

<div   className='listing   pe-5 me-5' > 
<EmployeeTable></EmployeeTable>

</div>





<div   className='m-5 ' >






</div>


<Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>









        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default ListingEmployees