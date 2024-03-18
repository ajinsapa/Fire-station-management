import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import EmployeeNav from "./EmployeeNav";
import "./Employee.css";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addVehicleApi } from "views/Services/AllApis";
import { addEquipmentApi } from "views/Services/AllApis";

const EmployeeDashboard = () => {
  const [token, setToken] = useState("");

//state for equipment

const[equipment,setEquipment]=useState({
  name:"",
  quantity:"",
  maintenance_record:"",
  expiration_date:""
})


const setEquipmentInputs = (e) => {
  const { value, name } = e.target;
  setEquipment({ ...equipment, [name]: value });
  };
 

const handleEquipmentAdd = async (e) => {
  e.preventDefault();
  const {name,  quantity,maintenance_record,expiration_date } = equipment;
  if (!name || !quantity||!maintenance_record||!expiration_date){
    alert("please fill all datas");
  } else {
    const reqHeader = {
      Authorization: `Token ${token}`,
    };

    const reqBody = new FormData();
    reqBody.append("name", name);

    reqBody.append("quantity", quantity);
    reqBody.append("maintenance_record", maintenance_record);
    reqBody.append("expiration_date", expiration_date);

    const result = await addEquipmentApi(reqBody, reqHeader);

    console.log(result);
    if (result.status == 200) {
      alert(`${result.data.name}is added`);
      setEquipment({ name: "", quantity: "", maintenance_record:"",expiration_date});
    } else {
      alert(result.response.data);
    }
  }
};

  //state for vehicle

  const [vehicle, setVehicle] = useState({
    vehicle_type: "",
    plate_number: "",
  });

  const setVehicleInputs = (e) => {
    const { value, name } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  console.log(vehicle);

  const handleVehicleAdd = async (e) => {
    e.preventDefault();
    const { vehicle_type, plate_number } = vehicle;
    if (!vehicle_type || !plate_number) {
      alert("please fill all datas");
    } else {
      const reqHeader = {
        Authorization: `Token ${token}`,
      };

      const reqBody = new FormData();
      reqBody.append("vehicle_type", vehicle_type);

      reqBody.append("plate_number", plate_number);

      const result = await addVehicleApi(reqBody, reqHeader);

      console.log(result);
      if (result.status == 200) {
        alert(`${result.data.vehicle_type}is added`);
        setVehicle({ ...vehicle, vehicle_type: "", plate_number: "" });
      } else {
        alert(result.response.data);
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  console.log(token);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <EmployeeNav></EmployeeNav>
      <Container>
        <h1 className="mt-4  emp   mb-4">Employee Dashboard</h1>
        <Row >
          <Col md="4">
            <Card className="caard1  " style={{height:"380px"}}>
              <CardBody className="card-body2">
                <CardTitle className="vehiclelistadd">
                  {" "}
                  <b style={{ color: "Red" }}>Vehicles </b>{" "}
                </CardTitle>
                <CardText>
                  <Form
                    className="form1"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Label>
                          {" "}
                          <b>Name </b>{" "}
                        </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Name"
                          name={"vehicle_type"}
                          onChange={(e) => setVehicleInputs(e)}
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="validationCustom02">
                        <Form.Label>
                          {" "}
                          <b>Number </b>{" "}
                        </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Number"
                          onChange={(e) => setVehicleInputs(e)}
                          name={"plate_number"}
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3"></Row>
                    <Form.Group className="mb-3"></Form.Group>
                    <Button
                      onClick={(e) => handleVehicleAdd(e)}
                      className="mb-5"
                      type="submit"
                    >
                      Add
                    </Button>
                  </Form>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" >
            <Card className="caard1">
              <CardBody className="card-body2  " style={{height:"380px"}}>
                <CardTitle className="vehiclelistadd">
                  {" "}
                  <bh-100 style={{ color: "Red" }}>Equipments </bh-100>{" "}
                </CardTitle>
                <CardText>
                  <Form
                    className="form1"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Label>
                          {" "}
                          <b>Name </b>{" "}
                        </Form.Label>
                        <Form.Control required type="text" placeholder="Name"
                        onChange={(e)=>{setEquipmentInputs(e)}}
                        name={"name"}
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="validationCustom02">
                        <Form.Label>
                          {" "}
                          <b>Quantity </b>{" "}
                        </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Number"
                          onChange={(e)=>{setEquipmentInputs(e)}}
                        name={"quantity"}
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom03"
                      >
                        <Form.Label>
                          {" "}
                          <b>Maintenance </b>{" "}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Maintanence"
                          required
                          onChange={(e)=>{setEquipmentInputs(e)}}
                        name={"maintenance_record"}
                        />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom03"
                      >
                        <Form.Label>
                          {" "}
                          <b>Expire On </b>{" "}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="YYYY-MM-DD"
                          required
                          onChange={(e)=>{setEquipmentInputs(e)}}
                        name={"expiration_date"}
                        />
                      </Form.Group>
                    </Row>
                    <Form.Group className="mb-3"></Form.Group>
                    <Button className="mb-5" type="submit"  onClick={(e)=>handleEquipmentAdd(e)}  >
                      Add
                    </Button>
                  </Form>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <CardBody className="card-body2" style={{height:"380px"}}>
                <CardTitle className="vehiclelistadd">
                  {" "}
                  <b style={{ color: "Red" }}>Training Session</b>
                </CardTitle>
                <CardText>
                  {" "}
                  <Form
                    className="form1"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="mb-3">
                      <div>
                        <img
                          style={{ height: "150px", width: "100%" }}
                          src="https://i.postimg.cc/PqhG2rZL/fireman-firefighting-firefighter-fire-safety-fire-protection-engineering-publicity-fire-department-p.png"
                          alt=""
                        />
                      </div>
                      <h5 className="view">Training Videos</h5> <br />
                      <Button className="but " href="/employeevideo-list">
                        {" "}
                        View
                      </Button>
                    </Row>
                  </Form>
                </CardText>
                {/* Add a link/button to view shift schedule */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EmployeeDashboard;
