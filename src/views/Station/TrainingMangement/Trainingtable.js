import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import'./TraningTable.css'
import { PieChart, Pie, Tooltip, Legend } from 'recharts';
import { getTrainingStatusApi } from 'views/Services/AllApis';


function Trainingtable() {

const[trainingStatus,setTrainingStatus]=useState(null)


const getTrainingStatus=async()=>{

const result= await getTrainingStatusApi()
setTrainingStatus(result.data)

  }

useEffect(()=>{

getTrainingStatus()

},[])


  
        
 
  if(trainingStatus === null) return(<></>)
  console.log(trainingStatus);
  return (
    <div className='w-75  curved-shadow ' >
      {trainingStatus.map((user, index) => {
        const data = [
          { name: 'Training Attended', value: (user.completed_trainings / user.total_trainings) * 100 ,fill:"#FFA500" },
          { name: 'Missing Training session', value: 100 - ((user.completed_trainings / user.total_trainings) * 100) ,fill:"#FF0000"  },
        ];

        return (
          <Row key={index} className='p-5 mb-5 w-100' style={{ backgroundColor: "white" }}>
            <Col lg={4} className=''>
              <div className='w-100 aj '>
                <h5 className='text-center j1 n2 '><b className='n1'> Name:</b>   {user.employee_name} </h5>
                <h5 className='text-center j1 p-2'><b className='n1'> Attended Sessions:</b>  {user.completed_trainings} </h5>
                <h5 className='text-center j1'><b className='n1'> Total Training Sessions: </b> {user.total_trainings}  </h5>
              </div>
            </Col>
            <Col lg={8} className='mt-5'>
              <div>
                <h5 className='text-center j1'><b className='n2'> Attendance of Training</b></h5>
                <hr />
                <PieChart className='m-2' width={400} height={250}>
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
        );
      })}
    </div>
  );
}

export default Trainingtable;