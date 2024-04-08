import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./VehicleView.css";
import { getViewVehicleListApi } from "views/Services/AllApis";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from 'axios'
function VehicleView() {
  const [viewVehicle, setViewVehicle] = useState(null);
  const token = localStorage.getItem("token");
  const reqHeader = {
    Authorization: `Token ${token}`,
  };

  const getViewVehicleList = async () => {
    const result = await getViewVehicleListApi(reqHeader);
    setViewVehicle(result.data);
  };
  const handleTrue = async (id) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/employeeapi/vehicle/${id}/make_available/`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(response);
      if (response.status >= 200 && response.status <= 300) {
        alert("Made Available");
        // Refresh the equipment list after making it available
        getViewVehicleList();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFalse = async (id) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/employeeapi/vehicle/${id}/make_unavailable/`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(response);
      if (response.status >= 200 && response.status <= 300) {
        alert("Made Unavailable");
        // Refresh the equipment list after making it unavailable
        getViewVehicleList();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getViewVehicleList();
  }, []);

  console.log(viewVehicle);

  if (viewVehicle === null) return <></>;

  return (
    <Container fluid>
      <Row>
        {viewVehicle.map((vehicle, index) => (
          <Col md={4} key={index}>
            <ListGroup className="vehicle11">
              <ListGroup.Item>
                <b>Vehicle Name</b>: {vehicle.vehicle_type}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>No</b>: {vehicle.plate_number}
              </ListGroup.Item>
              <ListGroup.Item>
              <b>Availability:</b> {vehicle?.is_available ? "✅" : "❌"}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Action</b>:{" "}
                <Button
                  className="btn"
                  style={{ color: "white", backgroundColor: "green" }}
                  onClick={() => handleTrue(vehicle?.id)}
                >
                  True
                </Button>
                <Button
                  className="btn-btn-success mx-3"
                  style={{ color: "white", backgroundColor: "red" }}
                  onClick={() => handleFalse(vehicle?.id)}
                >
                  False
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default VehicleView;
