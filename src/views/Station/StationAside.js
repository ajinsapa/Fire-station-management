import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './StationAside.css'
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';




function StationAside() {
  return (
    <Container fluid   className='mb-5  cardd'     >
      <Row>
        <Col sm={7}>
         <Card className="mt-3  mb-5 "  style={{backgroundColor:"black"}}  >
            <Card.Body>
              <Card.Title>        <Avatar   className='mx-5' >A</Avatar>
</Card.Title>
<Link    style={{textDecoration:"none"}} >
              
              <ul className="list-group   "   >
                <Link   to="/listing-employees" > 
                <li className="list-group-item" style={{backgroundColor:"black"}} >
                      
                <i class="fa-solid fa-user mx-2 "></i>
                 <span   >Employee Management </span> </li   >
                 </Link>
                 
                 <Link   to="/incident" >    
                 <li className="list-group-item" style={{backgroundColor:"black"}} >
                  
                 <i class="fa-solid fa-fire  mx-2"></i>
                 <span  >Incident  Management </span> </li   >
                 </Link>

<Link    to="/team-listing"  > 
                 <li className="list-group-item" style={{backgroundColor:"black"}} >
                  
                 <i class="fa-solid fa-people-group mx-2"></i>
                 <span  >Team  Management </span> </li   >
                 </Link>

                 <Link   to="/training-list" > 
                <li className="list-group-item" style={{backgroundColor:"black"}} >
                      
                <i class="fa-solid fa-user mx-2 "></i>
                 <span   >Training Management </span> </li   >
                 </Link>
                 
              </ul>
              </Link>
            </Card.Body>
          </Card>
        </Col>
       
      </Row>
    </Container>
  );
}

export default StationAside;
