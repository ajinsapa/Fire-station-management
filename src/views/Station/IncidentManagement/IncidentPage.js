import StationNav from "../StationNav";
import { Button, Col, Container, Row } from "reactstrap";
import "./IncidentPage.css";
import './IncidentList.css'

function IncidentPage() {



  return (
    <div className="ef">
      <div className="mb-2" style={{ backgroundColor: "red" }}>
        <StationNav></StationNav>
      </div>

      
<Container    className="container-incident  mb-2 mt-5"  >



<Col lg={6}  className="box"  style={{color:"red"}}  >



<Button  className="res1"  href="/res-path" >Resource Available</Button>

</Col>




<Col lg={6}  className="box" >


<Button  className="res1"  href="/incident-path">Incident List</Button>



          
       



















</Col>





</Container>


    </div>
  );
}

export default IncidentPage;
