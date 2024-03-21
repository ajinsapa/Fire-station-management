import React, { useEffect, useState } from "react";
import "./TeamListing.css";
import StationNav from "../StationNav";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "reactstrap";
import Modal from "react-bootstrap/Modal";
import { addTeamCreationApi } from "views/Services/AllApis";
import axios from "axios";
import TeamList from "./TeamList";


const TeamListing = () => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    getEmployee();
  }, []);

  const [team, setTeam] = useState({
    name: "",
    employees: [],
  });

  const [employee, setEmployee] = useState(null);

  const getEmployee = async () => {
    try {
      const result = await axios.get(
        `http://127.0.0.1:8000/stationapi/team/available_employees/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      if (result.status === 200) {
        setEmployee(result.data);
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const setTeamInput = (e) => {
    const { value, name } = e.target;
    setTeam({ ...team, [name]: value });
  };

  const [forms, setForms] = useState([]);

  const incrementEmployees = () => {
    setForms((prevForms) => [
      ...prevForms,
      <Form key={prevForms.length}>
        <Form.Group controlId={`employeeSelect${prevForms.length}`}>
          <Form.Label>Select Employees</Form.Label>
          <Form.Control
            as="select"
            name={`employee${prevForms.length}`}
            onChange={(e) => {
              const { value } = e.target;
              setTeam((prevTeam) => ({
                ...prevTeam,
                employees: [...prevTeam.employees, value],
              }));
            }}
          >
            <option value="">Select Employees</option>
            {employee &&
              employee.map((i) => (
                <option key={i.id} value={i.id}>
                  {i.name} - {i.id}
                </option>
              ))}
          </Form.Control>
        </Form.Group>
      </Form>,
    ]);
  };

  const decrementEmployees = () => {
    setForms((prevForms) => prevForms.slice(0, -1));
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCreateTeam = async (e) => {
    e.preventDefault();
    const { name, employees } = team;
    if (!name || employees.length === 0) {
      alert("Please fill in all data");
    } else {
      const reqHeader = {
        Authorization: `Token ${token}`,
      };
      const reqBody = {
        name: name,
        employees: employees,
      };
      try {
        const result = await addTeamCreationApi(reqBody, reqHeader);
        alert(`${result.data.name} is created`);
        setTeam({ name: "", employees: [] });
        handleClose();
      } catch (error) {
        console.error("Error creating team:", error);
      }
    }
  };

  return (
    <div className="b">
      <StationNav />
      <div className="d-flex justify-content-between" style={{ marginTop: "150px" }}>
        <Button className="teamcreation1 button1" onClick={handleShow} >Team Creation</Button>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title style={{ color: "red" }}>Team Creation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel style={{ color: "black" }} controlId="teamNameModal">
            <Form.Control
              type="text"
              placeholder="Team Name"
              value={team.name}
              onChange={(e) => setTeamInput(e)}
              name="name"
            />
          </FloatingLabel>
          <FloatingLabel style={{ color: "black" }} controlId="employeeSelect">
            <Button  variant="" onClick={incrementEmployees}>
              <i className="fa-sharp fa-solid fa-plus icon"></i>
            </Button>
            <Button variant=""  onClick={decrementEmployees}>
              <i className="fa-sharp fa-solid fa-minus icon"></i>
            </Button>
            {forms.map((form, index) => (
              <div key={index}>{form}</div>
            ))}
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: "red" }} variant="secondary" onClick={handleClose}>Close</Button>
          <Button onClick={handleCreateTeam} style={{ backgroundColor: "red" }} variant="primary">Create</Button>
        </Modal.Footer>
      </Modal>

<TeamList></TeamList>

    </div>
  );
};

export default TeamListing;
