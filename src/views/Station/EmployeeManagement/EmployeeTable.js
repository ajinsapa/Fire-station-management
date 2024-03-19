import { defineLocale } from 'moment';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'reactstrap';
import { delEmployeeApi } from 'views/Services/AllApis';
import { getAllEmployeeListApi } from 'views/Services/AllApis';
function EmployeeTable() {

const[employeeList,setEmployeeList]=useState(null)

const token=localStorage.getItem("token")

const reqHeader = {
  Authorization: `Token ${token}`,
};

const getEmployeeList=async()=>{
  if(localStorage.getItem("token")){

    const reqHeader = {
      Authorization: `Token ${token}`,
    };
    

const result= await getAllEmployeeListApi(reqHeader)
setEmployeeList(result.data)
console.log(result);

  }
}
useEffect(()=>{

  getEmployeeList()
},[])

if(employeeList === null) return(<></>)

console.log(employeeList);

const deleteEmployee = async(e,id)=>{
  e.preventDefault()
  const response = await delEmployeeApi(id,reqHeader)
if(response.status==200){
  getEmployeeList()
}
}








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
        {employeeList?.map((i,index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{i.name}</td>
          <td>{i.phone}</td>
          <td>{i.email_address}</td>
          <td>

         <Button className='border-0' style={{backgroundColor:"transparent"}} onClick={(e)=>deleteEmployee(e,i.id)}> <i class="fa-solid fa-trash "  style={{color:"red"}} ></i></Button>

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