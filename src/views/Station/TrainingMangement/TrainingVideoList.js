import React from 'react'
import './TrainingVideoList.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StationNav from '../StationNav';


function TrainingVideoList() {
  return (
    <div  className=' k1' >
<StationNav></StationNav>

<div  className='  m-5 trainingvideo p-5' >
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title  style={{color:"red"}} className='text-center'>Video Title</Card.Title>
        <Card.Text>
        video
        </Card.Text>
       
      </Card.Body>
    </Card>





</div>









    </div>
  )
}

export default TrainingVideoList