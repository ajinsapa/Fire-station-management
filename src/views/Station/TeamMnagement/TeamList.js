import React from 'react'
import StationNav from '../StationNav'
import './TeamList.css'
import ListGroup from 'react-bootstrap/ListGroup';



function TeamList() {
  return (
    <div   style={{backgroundColor:"beige"}} >
<StationNav></StationNav>
    <div className=' team   '  style={{ border: '5px solid red',backgroundColor:"beige" }}>
      <h2 style={{ textAlign: 'center',color:"black" }}>Teams</h2>
      
      <div   className='list2'>

<ListGroup  style={{textAlign:"center"}}  >
<ListGroup.Item> <b  style={{color:"red"}} >Name:</b>     Team 1</ListGroup.Item>
<ListGroup.Item><b style={{color:"red"}} >Employees:</b>  4</ListGroup.Item>
</ListGroup>

</div>
      
        </div>
       
    </div>
    













  )
}

export default TeamList