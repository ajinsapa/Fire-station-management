import React, { useState } from 'react'
import Trainingtable from './Trainingtable'
import StationNav from '../StationNav'
import './TrainingList.css'
import { Button } from 'react-bootstrap';



function TrainingList() {







  return (
    <div   className='m1' >

        <StationNav></StationNav>

        <div>
<h1 className='pe-5 me-5 listing mt-5 head '   >Employees Attending Training Sessions</h1>

        </div>
<div   className=' listing me-5 mb-2' >

<Button className="animated-button  "  href="/video-list"  >
     Training Videos
    </Button>



</div>
<div className=' listingg '  >

<Trainingtable></Trainingtable>

</div>






      
   

    </div>
    
  )
}

export default TrainingList