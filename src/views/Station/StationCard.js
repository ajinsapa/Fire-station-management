import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import './StationCard.css'
function StationCard() {
  return (
    <div  className='d1 '  >

<Card style={{ width: '18rem' }}>
<i class="fa-solid fa-truck  fa-3x my-2"  style={{color:"black"}} ></i>      <Card.Body>
        <Card.Title   style={{color:"black"}} >Vehicle List</Card.Title>
        
        <Button variant="primary">Click here</Button>
      </Card.Body>
    </Card>
    
<Card style={{ width: '18rem' }}  className='mx-5  ' >
<i class="fa-solid fa-fire-extinguisher   fa-3x my-2  " style={{color:"black"}} ></i>
      <Card.Body>
      <Card.Title   style={{color:"black"}} >Equipment List</Card.Title>
        
        <Button variant="primary">Click here</Button>
      </Card.Body>
    </Card>












      
    </div>
  )
}

export default StationCard