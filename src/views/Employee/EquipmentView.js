import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./VehicleView.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { getViewEquipmentListApi } from "views/Services/AllApis";
import axios from "axios";

function EquipmentView() {
  const [viewEquipment, setviewEquipment] = useState(null);
  const token = localStorage.getItem("token");
  const reqHeader = {
    Authorization: `Token ${token}`,
  };

  const getViewEquipmentList = async () => {
    try {
      const result = await getViewEquipmentListApi(reqHeader);
      setviewEquipment(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getViewEquipmentList();
  }, []);

  const handleTrue = async (id) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/employeeapi/equipment/${id}/make_available/`,
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
        getViewEquipmentList();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFalse = async (id) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/employeeapi/equipment/${id}/make_unavailable/`,
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
        getViewEquipmentList();
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!viewEquipment) return null;
  console.log(viewEquipment);
  return (
    <Container fluid>
      <Row>
        {viewEquipment.map((equipment, index) => (
          <Col md={4} key={index}>
            <ListGroup className="vehicle11">
              <ListGroup.Item>
                <b> Name</b>: {equipment.name}
              </ListGroup.Item>
              <ListGroup.Item>
                <b> Quantity:</b> {equipment.quantity}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Maintenance:</b> {equipment.maintenance_record}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Expire On:</b> {equipment.expiration_date}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Availability:</b> {equipment?.is_available ? "✅" : "❌"}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Action</b>:{" "}
                <Button
                  className="btn"
                  style={{ color: "white", backgroundColor: "green" }}
                  onClick={() => handleTrue(equipment.id)}
                >
                  True
                </Button>
                <Button
                  className="btn btn-danger mx-3"
                  onClick={() => handleFalse(equipment.id)}
                  style={{ color: "white" }}
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

export default EquipmentView;
