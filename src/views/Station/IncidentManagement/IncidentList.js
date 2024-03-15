import React, {  useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './IncidentList.css';
import StationNav from '../StationNav';
import {  Form} from "react-bootstrap";
import { getIncidentStatusApi } from 'views/Services/AllApis';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getResourceApi } from 'views/Services/AllApis';
import { getIncidentListApi } from 'views/Services/AllApis';
import { getSingleIncidentListApi } from 'views/Services/AllApis';






function IncidentList() {


  const {id}=useParams()
  const [data,setData] = useState(null)
  const token=localStorage.getItem("token")
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

    const [status, setStatus] = useState(false);
  
    const handleStatusChange = () => {
      setShowModal(true)
       // Toggles the status between true and false
    };

    useEffect(()=>{
       getListData()
    },[])

     const getListData = async()=>{
       if(localStorage.getItem("token")){
        const reqHeader={
          Authorization:`Token ${token}`
        }
        const result=await getSingleIncidentListApi(id,reqHeader)
        console.log(result);
        setData(result.data)
        
    }}

if(data == null ) return(<></>)

  return (
    <div style={{ backgroundColor: "beige" }}>
      <StationNav />
      <div className='m-5 a5'>
        <ListGroup className="custom-list mt-5"  onClick={handleShowModal} >
          <ListGroup.Item className="custom-list-item"><b style={{ color: "Orange" }}>Date and Time :</b>  {data?.date_time
}</ListGroup.Item>
          <ListGroup.Item className="custom-list-item"><b style={{ color: "Orange" }}>Location :</b> {data?.location
}</ListGroup.Item>
          <ListGroup.Item className="custom-list-item"><b style={{ color: "Orange" }}> Type: </b> {data?.type}</ListGroup.Item>
          <ListGroup.Item className="custom-list-item"><b style={{ color: "Orange" }}> Intensity:</b>{data?.severity } </ListGroup.Item>
          <ListGroup.Item className="custom-list-item"><b style={{ color: "Orange" }}> Description: </b>  {data?.description
}</ListGroup.Item>
        </ListGroup>
       
      </div>

      <Modal show={showModal} onHide={handleCloseModal     }    >
        <Modal.Header >
          <Modal.Title   style={{color:"red"}} >Incident Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <ListGroup>
            <ListGroup.Item><b   style={{color:"black"}} >Date and Time:</b> {data?.date_time}</ListGroup.Item>
            <ListGroup.Item><b style={{color:"black"}}  >Location:</b>{data?.location}</ListGroup.Item>
            <ListGroup.Item><b style={{color:"black"}}  >Type:</b> {data?.type}</ListGroup.Item>
            <ListGroup.Item><b style={{color:"black"}}  >Intensity:</b> {data?.severity }h</ListGroup.Item>
            <ListGroup.Item><b style={{color:"black"}}  >Description:</b> {data?.description} </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor:"red"}} variant="secondary" onClick={handleCloseModal}>
            Close
          </Button> 

          <Form>
      <Form.Check   
        type="switch"
        id="statusSwitch"
        className='btn btn'
        
        style={{backgroundColor:"Red",color:"White"}
    }
        label={status ? "Completed 👍 ": "Pending 😊"}
        checked={status}
        onChange={handleStatusChange}
      />
    </Form>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default IncidentList;
