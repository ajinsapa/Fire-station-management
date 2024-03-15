import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, Col, Row } from 'reactstrap';
import EmployeeNav from './EmployeeNav';
import './EmployeeTrainingList.css'; // Import CSS file for styling
import { getEmployeeTrainingVideos } from 'views/Services/AllApis';
import { Base_Url } from 'views/Services/Base_Url';

const EmployeeTrainingList = () => {
  const [employeeTrainingVideos, setEmployeeTrainingVideos] = useState(null);

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

  if (employeeTrainingVideos === null) return (<></>);

  return (
    <div>
      <EmployeeNav />
      <h1 className='text-center'>Training Session Videos</h1>
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
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EmployeeTrainingList;
