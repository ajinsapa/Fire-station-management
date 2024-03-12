import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import './VehicleList.css'
import StationNav from '../StationNav';

function VehicleList() {
  return (
    <div   className='vehicle2  ' >
        
        <StationNav></StationNav>
        
       <div   >    
        
        
        
         <ListGroup  className='vehicle' >
    <ListGroup.Item>Vehicle Name:</ListGroup.Item>
    <ListGroup.Item>No.</ListGroup.Item>
    <ListGroup.Item>Availability:</ListGroup.Item>
    <ListGroup.Item>Equipments :</ListGroup.Item>
  </ListGroup>
  
  </div> 
  
  </div>
  )
}

export default VehicleList