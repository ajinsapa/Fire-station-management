import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getAllEmployeeListApi } from 'views/Services/AllApis';
function EmployeeTable() {

const[employeeList,setEmployeeList]=useState(null)

const getEmployeeList=async()=>{
  if(localStorage.getItem("token")){

const token=localStorage.getItem("token")

const reqHeader = {
  Authorization: `Token ${token}`,
};
const result= await getAllEmployeeListApi(reqHeader)
setEmployeeList(result.data)

  }
}
useEffect(()=>{


  getEmployeeList()
},[])

if(employeeList === null) return(<></>)

console.log(employeeList);










  return (

    <div> 


      
    <div   className='table m-5' >


<Table style={{backgroundColor:"white"}} striped bordered hover   className='text-center ' >
      <thead>
        <tr style={{backgroundColor:"brown", color:"white"}}   >
          <th    >#</th>
          <th>Employee Name</th>
          <th>Phone Number</th>
          <th>Email Address</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {employeeList.map((i,index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{i.name}</td>
          <td>{i.phone}</td>
          <td>{i.email_address}</td>
          <td>

          <i class="fa-solid fa-trash"  style={{color:"red"}} ></i>

          </td>
        </tr>
        ))}
       

      </tbody>
    </Table>













    </div>

    </div>
  )
}

export default EmployeeTable