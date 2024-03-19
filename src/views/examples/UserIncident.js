import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./UserIncident.css";
import UserNav from "./UserNav";
import { getUserIncidentStatusApi } from "views/Services/AllApis";
import { Button } from "reactstrap";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { addFeedBackApi } from "views/Services/AllApis";
import axios from "axios";

function UserIncident() {
  const token = localStorage.getItem("token");

  const reqHeader = {
    Authorization: `Token ${token}`,
  };

  //feedback

  const [feedback, setFeedback] = useState({
    incident: "",
    user: "",
    comment: "",
  });
  const [ idFeed,setIdFeed] = useState(null)

  const setFeedbackInputs = (e) => {
    const { value, name } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };
 

  const handleAddFeedback = async (e) => {
    e.preventDefault();
    const { incident, user, comment } = feedback;

    if (!incident || !user || !comment) {
      alert("Please fill all datas");
    } else {
      const {comment} = feedback
      try {
        const result =await axios.post(`http://127.0.0.1:8000/userapi/incident/${idFeed}/feedback_add/`,{comment},{
          headers:{
            Authorization:`Token ${token}`
          }
        })
        if(result.status === 200 ){
          console.log(result.data);
          alert("FeedBack Added")
          ssetShow(false)
        }
      } catch (error) {
          console.log(error);
      };

    
    }
  };

  const [userIncidentStatus, setUserIncidentStatus] = useState(null);

  const [sshow, ssetShow] = useState(false);
  const SecondhandleClose = () => ssetShow(false);


  const SecondhandleShow = async(id) => {
    
    ssetShow(true)
    setIdFeed(id)
  };
  const getUserIncidentStatus = async () => {
    try {
      const result = await axios.get(
        `http://127.0.0.1:8000/userapi/incident/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(result);
      setUserIncidentStatus(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserIncidentStatus();
  }, []);
  if (userIncidentStatus === null)
    return (
      <>
        <UserNav></UserNav>
      </>
    );
  console.log(userIncidentStatus);

  // if (userIncidentStatus === null) return <></>;

  return (
    <div className="user2">
      <UserNav></UserNav>

      <div className="row mt-5  incident7">
        {userIncidentStatus.map((i) => (
          <div className="col-md-4 mb-5 ">
            <ListGroup className="user">
              <ListGroup.Item>
                {" "}
                <b>Location</b> : {i?.Incident?.location}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <b> Dat& time</b> :{i?.Incident?.date_time}
              </ListGroup.Item>
              <ListGroup.Item>
                <b> Type</b> :{i?.Incident?.type}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <b> Description</b> :{i?.Incident?.description}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <b> Severity</b> :{i?.Incident?.severity}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <b> Status</b> :{i?.status}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <Button
                  onClick={() => SecondhandleShow(i.id)}
                  className="incident55"
                >
                  {" "}
                  FeedBack
                </Button>{" "}
              </ListGroup.Item>
            </ListGroup>
          </div>
        ))}
      </div>
      <Modal show={sshow} onHide={SecondhandleClose}>
        <Modal.Header>
          <Modal.Title>Feedback Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Incident"
            className="mb-3 text-black"
          >
            <Form.Control
              type="text"
              onChange={(e) => setFeedbackInputs(e)}
              name={"incident"}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="User"
            className="mb-3"
          >
            <Form.Control
              type="text"
              onChange={(e) => setFeedbackInputs(e)}
              name={"user"}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Comment"
            className="mb-3"
          >
            <Form.Control
              type="text"
              onChange={(e) => setFeedbackInputs(e)}
              name={"comment"}
            />
          </FloatingLabel>

          <Button
            className="butt5"
            onClick={(e) => handleAddFeedback(e)}
            style={{ backgroundColor: "brown" }}
            type="submit"
          >
            Create
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={SecondhandleClose}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserIncident;
