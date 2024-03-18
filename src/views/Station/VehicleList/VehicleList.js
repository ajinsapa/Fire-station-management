import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import StationNav from '../StationNav';
import { getVehicleListApi } from 'views/Services/AllApis';

function VehicleList() {
  const [vehicle, setVehicle] = useState(null);

  const getVehicleList = async () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const reqHeader = {
        Authorization: `Token ${token}`,
      };
      const result = await getVehicleListApi(reqHeader);
      setVehicle(result.data);
    }
  };

  useEffect(() => {
    getVehicleList();
  }, []);

  console.log(vehicle);

  if (vehicle === null) return <></>;

  return (
    <div className='vehicle2'>
      <StationNav />
      <div className='row'>
        {vehicle.map((i) => (
          <div  className='col-md-4 mb-3'>
            <ListGroup className='vehicle'>
              <ListGroup.Item> <b>Vehicle Name </b> : {i.vehicle_type}</ListGroup.Item>
              <ListGroup.Item>  <b> No</b> : {i.plate_number}</ListGroup.Item>
              <ListGroup.Item> <b>Availability</b>: {i.is_available?"🟢":"🔴"}</ListGroup.Item>
            </ListGroup>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VehicleList;
