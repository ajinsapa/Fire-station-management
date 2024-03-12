import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import EmployeeNav from './EmployeeNav';
import './EmployeeTrainingList'
const EmployeeTrainingList = () => {
  // Sample list of training videos
  const [videos, setVideos] = useState([
    { id: 1, title: "Video 1", completed: false },
    { id: 2, title: "Video 2", completed: false },
    { id: 3, title: "Video 3", completed: false },
    // Add more videos as needed
  ]);

  // Function to toggle the completion status of a video
  const toggleVideoStatus = (id) => {
    setVideos(prevVideos =>
      prevVideos.map(video =>
        video.id === id ? { ...video, completed: !video.completed } : video
      )
    );
  };

  return (
    <div>
        <EmployeeNav></EmployeeNav>
      <h1  className='text-center' >Training Session Videos</h1>
      {videos.map(video => (
        <Card key={video.id} className="mb-3">
          <CardBody className='video12'  >
            <CardTitle>{video.title}</CardTitle>
            <CardText>Status: {video.completed ? "Completed" : "Not Completed"}</CardText>
            <Button onClick={() => toggleVideoStatus(video.id)}>
              {video.completed ? "Mark as Incomplete" : "Mark as Complete"}
            </Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default EmployeeTrainingList;
