import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardTitle, Col, Row } from 'reactstrap';
import EmployeeNav from './EmployeeNav';
import './EmployeeTrainingList.css'; // Import CSS file for styling
import { getEmployeeTrainingVideos } from 'views/Services/AllApis';
import { Base_Url } from 'views/Services/Base_Url';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EmployeeTrainingList = () => {
  const [employeeTrainingVideos, setEmployeeTrainingVideos] = useState(null);
  const token = localStorage.getItem("token");
  const getEmployeeVideos = async () => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      const reqHeader = {
        Authorization: `Token ${token}`,
      };
      const result = await getEmployeeTrainingVideos(reqHeader);
      setEmployeeTrainingVideos(result.data);
      console.log(result);
    }
  };

  useEffect(() => {
    getEmployeeVideos();
  }, []);

  const handeleAddToCar = async(id)=>{
    try {
      const result = await axios.post(`http://127.0.0.1:8000/employeeapi/traininglist/${id}/create_training/`,{},{
        headers:{
          Authorization:`Token ${token}`
        }
      })
      if(result.status === 200){
        alert("Added Successfully")
        console.log(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (employeeTrainingVideos === null) return (<></>);

  return (
    <div>
      <EmployeeNav />
      <h1 className='text-center'>Training Session Videos</h1>
      <div>
<Link  to="/cart" > 

<h1 className='m-5'><i className="fa-solid fa-cart-shopping" style={{ color: 'orange' }}></i></h1>


 </Link>

      </div>
      <Row className="justify-content-center">
        {employeeTrainingVideos.map(video => (
          <Col key={video.id} sm={4} className="mb-3">
            <Card style={{ width: "100%", height: "100%" }}>
              <CardBody className='video12 cardbody56'>
                <CardTitle>{video.name}</CardTitle>
                <div style={{ height: "80%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <video controls style={{ width: "100%", height: "100%" }}>
                    <source src={`${Base_Url}${video.video}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                  <Button style={{ width: "100%", height: "40px" }} color="primary" onClick={()=>handeleAddToCar(video?.id)}>Add to Cart</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EmployeeTrainingList;
