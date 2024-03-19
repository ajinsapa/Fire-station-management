import React, { useEffect, useState } from "react";
import "./TeamListing.css";
import StationNav from "../StationNav";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "reactstrap";
import Modal from "react-bootstrap/Modal";
import { addTeamCreationApi } from "views/Services/AllApis";
import axios from "axios";

const TeamListing = () => {
  // token
  const token = localStorage.getItem("token")

  useEffect(() => {
    getEmployee()
  }, []);

  // team creation
  const [team, setTeam] = useState({
    name: "",
    employees: [],
  });
  const [employee, setEmployee] = useState(null)
  console.log();

  const getEmployee = async () => {
    try {
      const result = await axios.get(`http://127.0.0.1:8000/stationapi/team/available_employees/`, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      if (result.status === 200) {
        console.log(result.data);
        setEmployee(result.data)
      }
    } catch (error) {

    }
  }

  const setTeamInput = (e) => {
    const { value, name } = e.target;
    if (name === "employees") {
      setTeam((prevTeam) => ({
        ...prevTeam,
        employees: [...prevTeam.employees, value],
      }));
    } else {
      setTeam({ ...team, [name]: value });
    }
  };

  const [numberOfEmployees, setNumberOfEmployees] = useState(0);
  const [forms, setForms] = useState([]);

  const incrementEmployees = () => {
    setNumberOfEmployees((prevCount) => prevCount + 1);
    setForms((prevForms) => [
      ...prevForms,
      <Form key={prevForms.length}>
        <Form.Group controlId={`employeeSelect${prevForms.length}`}>
          <Form.Label>Select Employees</Form.Label>
          <Form.Control
            as="select"
            value={team.employees[prevForms.length] || ""}
            name="employees"
            onChange={(e) => {
              setTeamInput(e);
            }}
          >
            <option value="">Select Employees</option>
            {
              employee != null ? employee.map((i) => (
                <option key={i.id} value={i.id}>Employee {i.id}</option>
              )) : <></>
            }
          </Form.Control>
        </Form.Group>
      </Form>,
    ]);
  };

  const decrementEmployees = () => {
    setNumberOfEmployees((prevCount) => Math.max(0, prevCount - 1));
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
        employees: employees
      };
      try {
        const result = await addTeamCreationApi(reqBody, reqHeader);
        console.log(result);
        if (result.status === 200) {
          alert(`${result.data.name} is created`);
          handleClose();
          setTeam({ ...team, name: "", employees: [] });
        }
      } catch (error) {
        console.error("Error creating team:", error);
      }
    }
  };

  return (
    <div className="b">
      <StationNav />
      <div
        className="team m-5"
        style={{
          border: "5px solid red",
          backgroundColor: "beige",
          padding: "50px",
        }}
      >
        <h2 style={{ textAlign: "center", color: "black" }}>Assign Team</h2>
        <FloatingLabel style={{ color: "black" }} controlId="incidentNumber">
          <Form.Control type="number" placeholder="Incident Number" />
        </FloatingLabel>
        <FloatingLabel style={{ color: "black" }} controlId="teamName">
          <Form.Control
            type="text"
            placeholder="Team Name"
            value={team.name}
            onChange={(e) => setTeamInput(e)}
            name="name"
          />
        </FloatingLabel>
        <div className="d-flex justify-content-between" style={{ marginTop: "150px" }}>
          <Button style={{ backgroundColor: "red" }} href="/team-list">Teams</Button>
          <Button onClick={handleShow} style={{ backgroundColor: "red" }}>Team Creation</Button>
          <Button style={{ backgroundColor: "red" }}>Add</Button>
        </div>
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
            <Button className="button1" variant="" onClick={incrementEmployees}>
              <i className="fa-sharp fa-solid fa-plus icon"></i>
            </Button>
            <Button variant="" className="button1" onClick={decrementEmployees}>
              <i className="fa-sharp fa-solid fa-minus icon"></i>
            </Button>
            {forms.map((form) => form)}
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: "red" }} variant="secondary" onClick={handleClose}>Close</Button>
          <Button onClick={(e) => handleCreateTeam(e)} style={{ backgroundColor: "red" }} variant="primary">Create</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TeamListing;