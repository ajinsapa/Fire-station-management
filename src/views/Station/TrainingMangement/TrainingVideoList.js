import React, { useEffect, useState } from "react";
import "./TrainingVideoList.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StationNav from "../StationNav";
import { getTrainingVideosApi } from "views/Services/AllApis";
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Base_Url } from "views/Services/Base_Url";

function TrainingVideoList() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [trainingVideos, setTrainingVideos] = useState([])

  const getTrainingVideos = async () => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      const reqHeader = {
        Authorization: `Token ${token}`,
      };
      const result = await getTrainingVideosApi(reqHeader);
      setTrainingVideos(result.data);
      console.log(result);
    }
  };
  console.log(trainingVideos);

  useEffect(() => {
    getTrainingVideos();
  
  console.log(trainingVideos);
  }, []);

  return (
    <div className="k1">
      <StationNav />
      <div className="d-flex flex-column align-items-center">
        <Button variant="primary" className="mb-5 mt-5" onClick={handleShow}>Add Training Videos</Button>
        <div className="d-flex flex-wrap justify-content-center">
          {trainingVideos.map((i) => (
            <div key={i.id} className="m-3 trainingvideo">
              <Card style={{ width: "25rem", height: "20rem" }}>
                <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <Card.Title style={{ color: "red", textAlign: "center" }}>
                    <b>{i.name}</b>
                  </Card.Title>
                  <div style={{ height: "80%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <video controls style={{ width: "100%", height: "50%" }}>
                      <source src={`${Base_Url}${i.video}`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title className='text-center p-2 modal11'>Training Sessions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingInput" label="" className="flow">
            <Form.Control type="text" placeholder="Video Name" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="">
            <Form.Control type="text" placeholder="Video Url" name='videoUrl' />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className='m-2' style={{ backgroundColor: 'brown' }} onClick={handleClose}>Add</Button>
          <Button className='bg-danger' variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TrainingVideoList;
