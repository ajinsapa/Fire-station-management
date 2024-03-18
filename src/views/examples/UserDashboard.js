import React, { useEffect } from 'react';
import UserNav from './UserNav';
import './UserDashboard.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Col, Row } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import { addIncidentApi } from 'views/Services/AllApis';

const UserDashboard = () => {


const [token,setToken]=useState("")

//state for incidentcreate

const[incidentCreate,setIncidentCreate]=useState({
 
  date_time:"",
  location:"",
  type:"",
  severity:"",
  description:""

})

const setIncidentInputs = (e) => {
  const { value, name } = e.target;

  if (name === 'date_time') {
    // Format the date and time string
    const date = new Date(value);
    const formattedDateTime = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    setIncidentCreate({ ...incidentCreate, [name]: formattedDateTime });
  } else {
    setIncidentCreate({ ...incidentCreate, [name]: value });
  }
};

console.log(incidentCreate);
 
  
const handleAddIncident=async(e)=>{
e.preventDefault()
const {date_time,
location,
type,
severity,
description
}=incidentCreate

if(!date_time|| !location||!type||!severity||!description){
  alert("Please fill all datas")
}

else{


  const reqHeader = {
    Authorization: `Token ${token}`,
  };

  const reqBody=new FormData()
  reqBody.append("date_time",date_time)

  reqBody.append("location",location)
  reqBody.append("type",type)
  reqBody.append("severity",severity)

  reqBody.append("description",description)

const result=await addIncidentApi(reqBody,reqHeader)

console.log(result);
if(result.status==200){
  alert(`${result.data.description}is added` )
  handleClose()
  setIncidentCreate({...incidentCreate,date_time:"",location:"",severity:"",type:"",description:""})
}
else{
  alert(result.response.data)
}




}}





useEffect(()=>{

if(localStorage.getItem("token")){
  setToken(localStorage.getItem("token")
  )
}

},[])

console.log(token);


  const [show, setShow] = useState(false);
  const [sshow, ssetShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const SecondhandleClose = () => ssetShow(false);
  const SecondhandleShow = () => ssetShow(true);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
 

  return (
    <div   >
<UserNav></UserNav>

   
  <div  className="mt-5 b1" style={{ display: 'flex' }} >
  <div style={{ flex: 3, backgroundColor: "beige", paddingTop: '20px' }}>
    
  </div>
  <div style={{ backgroundColor: "beige", paddingTop: '20px',display:"flex" }}  className='b3  text-dark' >   
  

    <p>
    <h2  className='mt-5 text-center'  style={{color:"brown"}}>Report an Incident </h2>
      
     <p  className='text-black '>  <b> Welcome to our incident reporting platform for the <b>  Nova Fire and Rescue Services    </b>. 
      Here, you can easily register any incidents or emergencies you encounter within our jurisdiction. Your prompt reporting helps us respond quickly and effectively to ensure the safety and well-being of our community.

Whether it's a fire outbreak, medical emergency, hazardous material spill, or any other incident requiring our attention, your report plays a crucial role in our emergency response efforts.
</b></p>  



<p> 
<b>  Our team of trained professionals is dedicated to providing swift assistance and resolving incidents efficiently. By registering incidents through our platform, you contribute to the collective effort of keeping our neighborhoods safe and secure.

Thank you for your cooperation and commitment to ensuring the safety of everyone in our community. Let's work together to make a difference and protect lives. </b> </p>
 
 </p> </div>
</div>
    <div  className="b2  "   style={{  justifyContent: 'center', alignItems: 'center',display:"flex" ,height: '100vh',backgroundColor:"beige" }}>
      <div style={{ width: '80%', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gridGap: '20px' }}>
        <div   className="ps-5" style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
       <Link   style={{textDecoration:"none"}}  onClick={handleShow}     > 
          <p>
            <img className='b4'  style={{height:"200px"}} src="https://i.postimg.cc/V6QQcdFZ/pngtree-fire-station-rescue-route-map-png-image-6928850-removebg-preview.png" alt="" />
            <h6  className='text-center' > Report here</h6>
          </p>
          </Link>
        </div>

        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Link   style={{textDecoration:"none"}}  onClick={SecondhandleShow}> 

         
         
        <p>
            <img className='b5'  style={{height:"100px"}} src="https://i.postimg.cc/YC7BV4bX/fire-engine-firefighter-fire-department-fire-station-clip-art-cute-fire-cliparts-removebg-preview-1.png " alt="" />
            <h6  className='text-center' > FeedBack</h6>
          </p>
          </Link>
        </div>







        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Link to="/user-incident"   style={{textDecoration:"none"}}   > 
        




        <p>
            <img className='b5'  style={{height:"130px"}} src="https://i.postimg.cc/yx2Jz89v/png-clipart-firefighter-structure-fire-fire-station-fireman-burning-photography-thumbnail-removebg-p.png " alt="" />
          
          
            <h6  className='text-center' > Incident Status</h6>

           



       




          </p> </Link>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Create incident</Modal.Title>
        </Modal.Header>
        <Modal.Body>




        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Location</Form.Label>
          <Form.Control
            required
            type="text"
            onChange={(e)=>setIncidentInputs(e)}
           name={"location"}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Date & Time</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="yyyy-mm-dd hh:mm:ss"
            onChange={setIncidentInputs}
            name={"date_time"}
          />

            
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Incident Type</Form.Label>
          <Form.Control
            required
            type="text"
            onChange={(e)=>setIncidentInputs(e)}
            name={"type"}
          />

            
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Severity</Form.Label>
          <Form.Control
            required
            type="text"
            name={"severity"}
            onChange={(e)=>setIncidentInputs(e)}
          />

            
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text"   onChange={(e)=>setIncidentInputs(e)}
          name={"description"} required />
          <Form.Control.Feedback type="invalid">
          
          </Form.Control.Feedback>
        </Form.Group>
        
       
      </Row>

     
      <Button className='butt5' onClick={(e)=>handleAddIncident(e)} style={{backgroundColor:"brown"}} type="submit">Create</Button>
    </Form>
























        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={handleClose}>
          close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={sshow} onHide={SecondhandleClose}>
        <Modal.Header >
          <Modal.Title>Feedback Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>




      <Button className='butt5'  style={{backgroundColor:"brown"}} type="submit">Create</Button>
    
 </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={SecondhandleClose}>
          close
          </Button>
        </Modal.Footer>
      </Modal>





      
    </div>

  );
};

export default UserDashboard;
