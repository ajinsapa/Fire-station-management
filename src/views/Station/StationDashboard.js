import React, { useEffect, useState } from 'react'

import './StationDashboard.css'
import { Col, Row } from 'reactstrap'
import StationAside from './StationAside'
import StationCard from './StationCard'






function StationDashboard() {


const [token,setToken]=useState("")


useEffect(()=>{
if(localStorage.getItem("token")){
  setToken(localStorage.getItem("token"))
}
else{
  setToken("")
}


},[])





  return (
    <div className='bac'  style={{backgroundColor:"black"}}   >



<div   style={{backgroundColor:"black",color:"white"}}     > 


<Row>

<Col   lg={6} >

<StationAside></StationAside>

</Col  >

<Col   lg={6} >

<div   className='text-center   me-5  w-100'  > 
  
  
  <h1  className='my-5  mt-5 me-5  r1'  >Welcome Admin</h1>
  <StationCard></StationCard>

<Row>

<Col  lg={6} >


</Col>

</Row>


   </div>
   

</Col>

<div>



</div>
</Row>



















 </div>







    </div>
    
  )
}

export default StationDashboard