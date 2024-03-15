import StationNav from "../StationNav";
import { Col, Container, Row } from "reactstrap";
import "./IncidentPage.css";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from 'react-bootstrap/Accordion';
import './IncidentList.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getResourceApi } from "views/Services/AllApis";
import { getIncidentListApi } from "views/Services/AllApis";

function IncidentPage() {

  const[resource,setResource]=useState(null)

const[incidentList,setIncidentList]=useState(null)



const getIncidentList=async()=>{
if(localStorage.getItem("token")){
  const token=localStorage.getItem("token")
const reqHeader={
  Authorization:`Token ${token}`,
}

const result= await getIncidentListApi(reqHeader)
setIncidentList(result.data)

   
}



}

useEffect(()=>{

  getIncidentList()
  
  
  },[])
 


  const getResource=async()=>{
if(localStorage.getItem("token")){
  const token=localStorage.getItem("token")
  const reqHeader={
    Authorization:`Token ${token}`
  }

  const result=await getResourceApi(reqHeader)

setResource(result.data)
  

}


  }
useEffect(()=>{


  getResource()
},[])
if(resource === null) return(<></>)
console.log(resource);
if(incidentList === null) return(<></>)
console.log(incidentList);

  return (
    <div className="ef">
      <div className="mb-2" style={{ backgroundColor: "red" }}>
        <StationNav></StationNav>
      </div>

      
<Container    className="container-incident  mb-2 mt-5"  >



<Col lg={6}  className="box"  style={{color:"red"}}  >



<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="acc"   style={{ borderBottom: 'none' }}>
            <b   style={{color:"red",backgroundColor:"white"}} >Resources Available   </b>
            </Accordion.Header>
        <Accordion.Body>
          
           {

resource.map((i=>(  
        <ListGroup>
            <ListGroup.Item>
              {" "}
              <b>Equipment:</b>  {i.name}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <b>Quantity:</b>{i.quantity}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <b>Maintenance:</b>{i.maintenance_record}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <b>Expiration:</b>{i.expiration_date}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <b>Availability:</b>{i.is_available?"🟢":"🔴"}
            </ListGroup.Item>
            <hr />
          </ListGroup>
          
          )))

        }
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
          
          { incidentList.map((i=>(

<Link  style={{textDecoration:"none"}} to={`/incident-list/${i.id}`} > 
        <ListGroup>
        <ListGroup.Item><b   style={{color:"black"}} >Date and Time:</b>{i.date_time} </ListGroup.Item>
            <ListGroup.Item><b style={{color:"black"}}  >Location:</b> {i.location
}</ListGroup.Item>
            <ListGroup.Item><b style={{color:"black"}}  >Type:</b> {i.type}</ListGroup.Item>
            <ListGroup.Item><b style={{color:"black"}}  >Intensity:</b>{i.severity}</ListGroup.Item>
            <ListGroup.Item><b style={{color:"black"}}  >Description:</b> {i.description}</ListGroup.Item>
         <hr />
          </ListGroup>
          </Link>
              )))    }
          
        </Accordion.Body>
      </Accordion.Item>

      </Accordion>




















</Col>





</Container>


    </div>
  );
}

export default IncidentPage;
