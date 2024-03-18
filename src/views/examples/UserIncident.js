import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './UserIncident.css';
import UserNav from './UserNav';
import { getUserIncidentStatusApi } from 'views/Services/AllApis';







function UserIncident() {

  const[userIncidentStatus,setUserIncidentStatus]=useState(null)



  const getUserIncidentStatus=async()=>{
    if(localStorage.getItem("token")){

const token= localStorage.getItem("token")

const reqHeader = {
    Authorization: `Token ${token}`,
  };
  const result=await getUserIncidentStatusApi(reqHeader)
  setUserIncidentStatus(result.data)
console.log(result);
    }




  }


useEffect(()=>{

    getUserIncidentStatus()

},[])

console.log(userIncidentStatus
    );





if(userIncidentStatus===null)return<></>



  return (
    <div className='user2'>
  <UserNav></UserNav>




      <div className='row mt-5'>
        
          <div  className='col-md-4 mb-3'>
            <ListGroup className='user'>
              <ListGroup.Item> <b>Location</b> : </ListGroup.Item>
              <ListGroup.Item>  <b> Dat& time</b> : </ListGroup.Item>
              <ListGroup.Item>  <b> Type</b> : </ListGroup.Item>
              <ListGroup.Item>  <b> Description</b> : </ListGroup.Item>
              <ListGroup.Item>  <b> Severity</b> : </ListGroup.Item>
              <ListGroup.Item>  <b> Status</b> : </ListGroup.Item>

            </ListGroup>
          </div>
        
      </div>
    </div>
  );;
}

export default UserIncident;
