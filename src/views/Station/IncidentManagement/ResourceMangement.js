import React, { useEffect, useState } from 'react';
import { getResourceApi } from "views/Services/AllApis";
import ListGroup from 'react-bootstrap/ListGroup';
import './Resource.css'
import StationNav from '../StationNav';

function ResourceMangement() {
    const [resource, setResource] = useState(null);

    const getResource = async () => {
        if (localStorage.getItem("token")) {
            const token = localStorage.getItem("token")
            const reqHeader = {
                Authorization: `Token ${token}`
            }
            const result = await getResourceApi(reqHeader);
            setResource(result.data);
        }
    }

    useEffect(() => {
        getResource();
    }, []);

    if (resource === null) return (<></>);

    return (
        <div className='resource2'>
            <StationNav></StationNav>
            <div className='row res3'>
                {resource.map((i) => (
                    <div className='col-md-4 mb-3'>
                        <ListGroup>
                            <ListGroup.Item>
                                <b>Equipment:</b> {i.name}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b>Quantity:</b> {i.quantity}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b>Maintenance:</b> {i.maintenance_record}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b>Expiration:</b> {i.expiration_date}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b>Availability:</b> {i.is_available ? "🟢" : "🔴"}
                            </ListGroup.Item>
                            <ListGroup.Item style={{ textAlign: 'center', paddingTop: '20px' }}>
                            </ListGroup.Item>
                            <hr />
                        </ListGroup>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ResourceMangement;
