import React from 'react'
import './ListingEmployees.css'
import EmployeeTable from './EmployeeTable'
import StationNav from '../StationNav'




function ListingEmployees() {
  return (
    <div  className='f1'   >

<StationNav></StationNav>

<h1   className='text-center' style={{color:"yellow"}} >Employees List</h1>

<div   className='listing   pe-5 me-5' > 
<EmployeeTable></EmployeeTable>

</div>





<div   className='m-5 ' >






</div>




    </div>
  )
}

export default ListingEmployees