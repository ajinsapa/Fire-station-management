import React, { useEffect, useState } from "react";
import EmployeeNav from "./EmployeeNav";
import { Button, Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import axios from "axios";
import { Base_Url } from "views/Services/Base_Url";
import { Form } from "react-bootstrap";


function EmployeeCart() {
  const token = localStorage.getItem("token");
  const [cartList, setCartList] = useState(null);

  useEffect(() => {
    getEmployeeAdd();
  }, []);

  const getEmployeeAdd = async () => {
    try {
      const result = await axios.get(
        `http://127.0.0.1:8000/employeeapi/training/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      if (result.status === 200) {
        console.log(result.data);
        setCartList(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCompleteTranin = async (id) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/employeeapi/training/${id}/mark_completed/`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data);
        alert("Video Completed");
        // Update the status of the completed video in the cartList
        setCartList(prevCartList => prevCartList.map(video => {
          if (video.id === id) {
            return { ...video, status: "Completed" };
          }
          return video;
        }));
      } 
    } catch (error) {
      console.error("Error marking video as completed:", error);
    }
  };
 

  if (cartList === null) return <></>;

  return (
    <div>
      <EmployeeNav />

      <div>
        <Row className="justify-content-center">
          {cartList.map((video, index) => (
            <Col key={index} sm={4} className="mb-3">
              <Card style={{ width: "100%", height: "100%" }}>
                <CardBody className="video12 cardbody56">
                  <CardTitle></CardTitle>
                  <div
                    style={{
                      height: "80%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <video controls style={{ width: "100%", height: "100%" }}>
                      <source
                        src={`http://127.0.0.1:8000${video?.training_list?.video}`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div style={{ textAlign: "center", marginTop: "10px" }}></div>
                  <div>
                    <Form.Check
                      type="switch"
                      id={`statusSwitch_${index}`}
                      className="btn btn"
                      style={{ backgroundColor: "Red", color: "White" }}
                      onChange={()=>handleCompleteTranin(video?.id)}
                      label={
                        video?.status !== "Completed" ?  "Pending 😊" :"Completed 👍"
                      }
                      disabled={video?.status === "Completed"}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default EmployeeCart;
