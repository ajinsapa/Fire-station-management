import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './UserIncident.css';
import UserNav from './UserNav';







function UserIncident() {
  

  return (
    <div className='user2'>
  <UserNav></UserNav>




      <div className='row mt-5'>
        
          <div  className='col-md-4 mb-3'>
            <ListGroup className='user'>
              <ListGroup.Item> <b>Vehicle Name </b> : </ListGroup.Item>
              <ListGroup.Item>  <b> No</b> : </ListGroup.Item>
              <ListGroup.Item> <b>Availability</b>: </ListGroup.Item>
              <ListGroup.Item> <b>Equipments</b>: </ListGroup.Item>
            </ListGroup>
          </div>
        
      </div>
    </div>
  );;
}

export default UserIncident;
