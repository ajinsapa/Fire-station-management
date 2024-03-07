import StationNav from "../StationNav";
import { Col, Container, Row } from "reactstrap";
import "./IncidentPage.css";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from 'react-bootstrap/Accordion';
import './IncidentList.css'
import { Link } from "react-router-dom";

function IncidentPage({ name, ...props }) {

  return (
    <div className="ef">
      <div className="mb-2" style={{ backgroundColor: "red" }}>
        <StationNav></StationNav>
      </div>

      
<Container  className="container-incident  mb-2 mt-5"  >



<Col lg={6}  className="box"  style={{color:"red"}}  >



<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="acc"   style={{ borderBottom: 'none' }}>
            <b   style={{color:"red",backgroundColor:"white"}} >Resources Available   </b>
            </Accordion.Header>
        <Accordion.Body>
          
        <ListGroup>
            <ListGroup.Item>
              {" "}
              <b>Equipment:</b> Oxygen Tank
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <b>Quantity:</b>20{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <b>Maintenance:</b>Annual inspection
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <b>Expiration:</b>2025-06-15
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <b>Availability:</b>Available
            </ListGroup.Item>
          </ListGroup>

        </Accordion.Body>
      </Accordion.Item>

      </Accordion>

</Col>




<Col lg={6}  className="box" >




<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="acc"   style={{ borderBottom: 'none' }}>
            <b   style={{color:"red",backgroundColor:"white"}} >Incident List </b>
            </Accordion.Header>
        <Accordion.Body>
          <Link  style={{textDecoration:"none"}} to="/incident-list" > 
        <ListGroup>
        <ListGroup.Item><b   style={{color:"black"}} >Date and Time:</b> 2024-02-19T18:40:00Z</ListGroup.Item>
            <ListGroup.Item><b style={{color:"black"}}  >Location:</b> Kadavanthra, ernakulam</ListGroup.Item>
            <ListGroup.Item><b style={{color:"black"}}  >Type:</b> Fire</ListGroup.Item>
            <ListGroup.Item><b style={{color:"black"}}  >Intensity:</b> High</ListGroup.Item>
            <ListGroup.Item><b style={{color:"black"}}  >Description:</b> A car got on fire due to overheating while travelling</ListGroup.Item>
          </ListGroup>
          </Link>
        </Accordion.Body>
      </Accordion.Item>

      </Accordion>




















</Col>





</Container>


    </div>
  );
}

export default IncidentPage;
