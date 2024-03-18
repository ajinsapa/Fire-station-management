import React, { useEffect, useState } from 'react';
import { getEquipmentApi } from 'views/Services/AllApis';
import ListGroup from 'react-bootstrap/ListGroup';
import StationNav from './StationNav';

function StationEquipment() {

    const [equipment, setEquipment] = useState(null);

    const getEquipmentList = async () => {
      if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token');
        const reqHeader = {
          Authorization: `Token ${token}`,
        };
  
        const result = await getEquipmentApi(reqHeader);
        setEquipment(result.data);
      }
    };
  
    useEffect(() => {
      getEquipmentList();
    }, []);
    console.log(equipment);
  
    if (equipment === null) return <></>;
  
  






  return (
    <div className='vehicle2'>
      <StationNav></StationNav>
      <div className='row'>
      {equipment.map((i) => (
          <div  className='col-md-4 mb-3'>
            <ListGroup className='vehicle'>
              <ListGroup.Item> <b>Name:</b> {i.name}</ListGroup.Item>
              <ListGroup.Item>  <b> Quantity:</b> {i.quantity}</ListGroup.Item>
              <ListGroup.Item> <b>Maintenance:</b> {i.maintenance_record}</ListGroup.Item>
              <ListGroup.Item> <b>Expire On:</b> {i.expiration_date}</ListGroup.Item>
              <ListGroup.Item><b>Availability:</b>  {i.is_available?"🟢":"🔴"}</ListGroup.Item>
  
            </ListGroup>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StationEquipment