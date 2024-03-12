import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import './StationCard.css'
import Dropdown from 'react-bootstrap/Dropdown';
function StationCard() {
  return (
    <div  className='d1 '  >

<Card style={{ width: '18rem' }}>
<i class="fa-solid fa-truck  fa-3x my-2"  style={{color:"black"}} ></i>      <Card.Body>
        <Card.Title   style={{color:"black"}} >Vehicle List</Card.Title>
        
        <Button variant="primary"    href="/vehicle-list" >Click here</Button>
      </Card.Body>
    </Card>
    
<Card style={{ width: '18rem' }}  className='mx-5  ' >
<i class="fa-solid fa-fire-extinguisher   fa-3x my-2  " style={{color:"black"}} ></i>
      <Card.Body>
      <Card.Title   style={{color:"black"}} >Equipment List</Card.Title>
   

      <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Click here
      </Dropdown.Toggle>


      <Dropdown.Menu>
        <Dropdown.Item>Name:</Dropdown.Item>
        <Dropdown.Item >Quantity:</Dropdown.Item>
        <Dropdown.Item >Maintenance:</Dropdown.Item>
        <Dropdown.Item >Expiration Date:</Dropdown.Item>

        <Dropdown.Item >Availability:</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>






      </Card.Body>
    </Card>


  








      
    </div>
  )
}

export default StationCard