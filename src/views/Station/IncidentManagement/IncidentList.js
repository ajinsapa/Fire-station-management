import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./IncidentList.css";
import StationNav from "../StationNav";
import { Dropdown, Form } from "react-bootstrap";
import { getIncidentStatusApi } from "views/Services/AllApis";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getResourceApi } from "views/Services/AllApis";
import { getIncidentListApi } from "views/Services/AllApis";
import { getSingleIncidentListApi } from "views/Services/AllApis";
import axios from "axios";

function IncidentList() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const token = localStorage.getItem("token");
  const [showModal, setShowModal] = useState(false);
  const [statusChnage, setStatusChange] = useState(null);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const secondhandleCloseModal = () => ssetShowModal(false);
  const secondhandleShowModal = () => ssetShowModal(true);
  const [sshowModal, ssetShowModal] = useState(false);
  const [teams, setTeams] = useState([]);
  const [selectedTeamId, setSelectedTeamId] = useState(null);

  const [status, setStatus] = useState(false);

  const handleStatusChange = async () => {
    const status = "Completed";
    try {
      const result = await axios.post(
        `http://127.0.0.1:8000/stationapi/incidents/${data?.incident?.id}/incident_status/`,
        { status },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      if (result.status === 200) {
        console.log(result);
        setStatusChange(result.data);
        getListData();
        alert("statusChnaged");
      }
    } catch (error) {
      console.log(error);
    }
    setShowModal(true);
    // Toggles the status between true and false
  };

  useEffect(() => {
    getListData();
    getTeams();
  }, []);

  const getListData = async () => {
    if (localStorage.getItem("token")) {
      const reqHeader = {
        Authorization: `Token ${token}`,
      };
      const result = await axios.get(
        `http://127.0.0.1:8000/stationapi/incidents/${id}/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(result);
      setData(result.data);
    }
  };

  const getTeams = async () => {
    try {
      const result = await axios.get(
        `http://127.0.0.1:8000/stationapi/available_team/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(result);
      setTeams(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleTeamSelection = (teamId) => {
    setSelectedTeamId(teamId);
  };
  const handleAssignTeam = async () => {
    if (!selectedTeamId) {
      alert("Please select a team");
      
      return;
    }
    const reqBody = new FormData();
      reqBody.append("team", selectedTeamId);
    try {
      const result = await axios.post(
        `http://127.0.0.1:8000/stationapi/incidents/${data?.incident?.id}/assign_team/`,
        reqBody,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      if (result.status === 200) {
        setSelectedTeamId(null);
        secondhandleCloseModal();
        alert("Team Assinged");
        console.log(result);
      }
    } catch (error) {
      console.error("Error assigning team:", error);
    }
  };

  if (data === null && teams === null) return <></>;

  return (
    <div style={{ backgroundColor: "beige" }}>
      <StationNav />
      <div className="m-5 a5">
        <ListGroup className="custom-list mt-5">
          <ListGroup.Item className="custom-list-item">
            <b style={{ color: "Orange" }}>Date and Time :</b>{" "}
            {data?.incident?.date_time}
          </ListGroup.Item>
          <ListGroup.Item className="custom-list-item">
            <b style={{ color: "Orange" }}>Location :</b>{" "}
            {data?.incident?.location}
          </ListGroup.Item>
          <ListGroup.Item className="custom-list-item">
            <b style={{ color: "Orange" }}> Type: </b> {data?.incident?.type}
          </ListGroup.Item>
          <ListGroup.Item className="custom-list-item">
            <b style={{ color: "Orange" }}> Intensity:</b>
            {data?.incident?.severity}{" "}
          </ListGroup.Item>
          <ListGroup.Item className="custom-list-item">
            <b style={{ color: "Orange" }}> Description: </b>{" "}
            {data?.incident?.description}
          </ListGroup.Item>
          <div className="d-flex">
            <Button onClick={secondhandleShowModal} className="mx-4">
              Assign Team
            </Button>
            <Button onClick={handleShowModal}>Assign status</Button>
          </div>
        </ListGroup>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title style={{ color: "red" }}>Incident Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <b style={{ color: "black" }}>Date and Time:</b>{" "}
              {data?.incident?.date_time}
            </ListGroup.Item>
            <ListGroup.Item>
              <b style={{ color: "black" }}>Location:</b>
              {data?.incident?.location}
            </ListGroup.Item>
            <ListGroup.Item>
              <b style={{ color: "black" }}>Type:</b> {data?.incident?.type}
            </ListGroup.Item>
            <ListGroup.Item>
              <b style={{ color: "black" }}>Intensity:</b>{" "}
              {data?.incident?.severity}h
            </ListGroup.Item>
            <ListGroup.Item>
              <b style={{ color: "black" }}>Description:</b>{" "}
              {data?.incident?.description}{" "}
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "red" }}
            variant="secondary"
            onClick={handleCloseModal}
          >
            Close
          </Button>

          <Form>
            <Form.Check
              type="switch"
              id="statusSwitch"
              className="btn btn"
              style={{ backgroundColor: "Red", color: "White" }}
              label={data?.incident_status ? "Completed 👍 " : "Pending 😊"}
              disabled={data?.incident_status?.status === "Completed"}
              onChange={() => handleStatusChange(data.id)}
            />
          </Form>
        </Modal.Footer>
      </Modal>

      <Modal show={sshowModal} onHide={secondhandleCloseModal}>
        <Modal.Header>
          <Modal.Title style={{ color: "red" }}>Incident Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <b style={{ color: "black" }}>Incident:</b>
              {data?.incident?.description}
            </ListGroup.Item>
            <ListGroup.Item>
              <b style={{ color: "black" }}>Location:</b>
              {data?.incident?.location}
            </ListGroup.Item>
            <ListGroup.Item>
              <b style={{ color: "black" }}>
                <Dropdown>
                  <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    Team {selectedTeamId === null ? null : selectedTeamId}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {teams.map((i) => (
                      <Dropdown.Item
                        onClick={() => {
                          handleTeamSelection(i?.id);
                        }}
                      >
                        Team {i?.id}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </b>
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "orange" }}
            variant="secondary"
            onClick={secondhandleCloseModal}
          >
            Close
          </Button>
          <Button
            style={{ backgroundColor: "orange" }}
            onClick={handleAssignTeam}
          >
            {" "}
            Assign{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default IncidentList;
