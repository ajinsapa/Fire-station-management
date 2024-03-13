import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './StationCard.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { getEquipmentApi } from 'views/Services/AllApis';

function StationCard() {
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
    <div className='d1'>
      <Card style={{ width: '18rem' }}>
        <i class="fa-solid fa-truck  fa-3x my-2" style={{ color: 'black' }}></i>
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>Vehicle List</Card.Title>
          <Button variant="primary" href="/vehicle-list">Click here</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }} className='mx-5'>
        <i class="fa-solid fa-fire-extinguisher   fa-3x my-2" style={{ color: 'black' }}></i>
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>Equipment List</Card.Title>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Click here
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {equipment.map((i) => (
                <div key={i.id}>
                  <Dropdown.Item><b>Name:</b> {i.name}</Dropdown.Item>
                  <Dropdown.Item><b>Quantity:</b> {i.quantity}</Dropdown.Item>
                  <Dropdown.Item><b>Maintenance:</b> {i.maintenance_record}</Dropdown.Item>
                  <Dropdown.Item><b>Expire On:</b> {i.expiration_date}</Dropdown.Item>
                  <Dropdown.Item><b>Availability:</b>  {i.is_available?"🟢":"🔴"}</Dropdown.Item>

                  <hr />
                </div>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          
        </Card.Body>
      </Card>
    </div>
  );
}

export default StationCard;
