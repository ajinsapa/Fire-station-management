import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getIncidentListApi } from 'views/Services/AllApis';
import ListGroup from 'react-bootstrap/ListGroup';
import StationNav from '../StationNav';

function Incident() {
    const [incidentList, setIncidentList] = useState(null);

    const getIncidentList = async () => {
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            const reqHeader = {
                Authorization: `Token ${token}`,
            };

            const result = await getIncidentListApi(reqHeader);
            setIncidentList(result.data);
        }
    };

    useEffect(() => {
        getIncidentList();
    }, []);

    if (incidentList === null) return <></>;

    return (
        <div className="mb-2" >
            <StationNav />

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {incidentList.map((incident) => (
                    <Link key={incident.id} style={{ textDecoration: 'none', width: '30%' }} to={`/incident-list/${incident.id}`}>
                        <ListGroup>
                            <ListGroup.Item>
                                <b style={{ color: 'black' }}>Date and Time:</b> {incident.date_time}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b style={{ color: 'black' }}>Location:</b> {incident.location}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b style={{ color: 'black' }}>Type:</b> {incident.type}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b style={{ color: 'black' }}>Intensity:</b> {incident.severity}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b style={{ color: 'black' }}>Description:</b> {incident.description}
                            </ListGroup.Item>
                            <hr />
                        </ListGroup>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Incident;
