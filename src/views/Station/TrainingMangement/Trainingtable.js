import React from 'react'
import { Col, Row } from 'reactstrap'
import'./TraningTable.css'
import { PieChart, Pie, Tooltip, Legend } from 'recharts';


function Trainingtable() {
  const totalTrainingVideos = 10; // Total number of training videos
  const videosAttended = 3; // Number of videos attended by the employee
  
  const attendancePercentage = (videosAttended / totalTrainingVideos) * 100;
        
  const data = [
    { name: 'Training  Attended', value: attendancePercentage,fill: '#e9ee0a' },
    { name: ' Missing Training session', value: 100 - attendancePercentage,fill: '#d1172a' },
  ];
  return (
    <div className='w-75 curved-shadow'  style={{backgroundColor:"white"}} >


<Row>

<Col lg={4}  className='mt-4' >

<div className='w-100 aj mt-5 pt-5'   > 
<h5   className='text-center j1 mt-5 ' > <b  className='n1' > Name:  </b>
     Ajinsa P A      </h5>

<h5  className='text-center j1 p-2 ' >  <b  className='n1' > Attended Sessions :</b>2 </h5>
<h5  className='text-center j1 ' >   <b   className='n1' > Total Training Sessions: </b>10 </h5>
 

</div>

</Col>
<Col  lg={8} className='mt-5'  >
    <div> 
        <h5  className='text-center j1 ' >  <b   className='n1' > Attendance of Training    </b>   
         </h5>
        <hr />
        <PieChart   className='m-2' width={400} height={250}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      />
      <Tooltip />
      <Legend />
    </PieChart>

</div>
</Col>




</Row>

<hr />










    </div>
  )
}





















 
  


export default Trainingtable