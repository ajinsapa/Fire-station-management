import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import StationNav from "../StationNav";
import "./TeamList.css";

function TeamList() {
    const [teams, setTeams] = useState([]);
    const token = localStorage.getItem("token");

    const getTeams = async () => {
        try {
            const result = await axios.get(`http://127.0.0.1:8000/stationapi/team/`, {
                headers: {
                    Authorization: `Token ${token}`
                }
            });
            setTeams(result.data);
            console.log(teams);
            getTeams()
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTeams();
    }, []);

    return (
        <div >
            <Container>
                <div className="team-list-container">
                    
                    <Row>
                        {teams.map((team, index) => (
                            <Col lg={3} key={index}>
                                <TeamCard team={team} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
}

function TeamCard({ team }) {
    return (
        <Card>
           
            <Card.Body>
                <Card.Title> <b> Team Name:</b>  {team.name}</Card.Title>
                <Card.Title> <b>Employees: </b>   {team.employees.join(", ")}</Card.Title>

            </Card.Body>
        </Card>
    );
}

export default TeamList;
