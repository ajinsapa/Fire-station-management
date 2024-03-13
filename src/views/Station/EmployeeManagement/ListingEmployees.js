import React from 'react'
import './ListingEmployees.css'
import EmployeeTable from './EmployeeTable'
import StationNav from '../StationNav'
import { Button } from 'reactstrap'
import { useState } from 'react';


function ListingEmployees() {












  return (
    <div  className='f1'   >

<StationNav></StationNav>

<h1   className='text-center highlighted-header '  >Employees List</h1>

<div   className='listing   pe-5 me-5' > 
<EmployeeTable></EmployeeTable>

</div>





<div   className='m-5 ' >






</div>


    </div>
  )
}

export default ListingEmployees