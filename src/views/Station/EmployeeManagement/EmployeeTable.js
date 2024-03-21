import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'reactstrap';
import { delEmployeeApi } from 'views/Services/AllApis';
import { getAllEmployeeListApi } from 'views/Services/AllApis';
import Swal from 'sweetalert2'; // Import Swal

function EmployeeTable() {
  const [employeeList, setEmployeeList] = useState(null)
  const token = localStorage.getItem("token")

  const reqHeader = {
    Authorization: `Token ${token}`,
  };

  const getEmployeeList = async () => {
    if (localStorage.getItem("token")) {
      const reqHeader = {
        Authorization: `Token ${token}`,
      };
      const result = await getAllEmployeeListApi(reqHeader)
      setEmployeeList(result.data)
    }
  }

  useEffect(() => {
    getEmployeeList()
  }, [])

  if (employeeList === null) return (<></>)

  const deleteEmployee = async (e, id) => {
    e.preventDefault();
    // Show confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Call delete API
        const response = await delEmployeeApi(id, reqHeader)
        if (response.status === 200) {
          // If deletion is successful, show success message
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          }).then(() => {
            // Refresh employee list
            getEmployeeList();
          });
        }
      }
    });
  }

  return (
    <div>
      <div className='table m-5'>
        <Table style={{ backgroundColor: "white" }} striped bordered hover className='text-center '>
          <thead>
            <tr style={{ backgroundColor: "brown", color: "white" }}>
              <th>#</th>
              <th>Employee Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {employeeList?.map((i, index) => (
              <tr key={i.id}>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.phone}</td>
                <td>{i.email_address}</td>
                <td>
                  <Button className='border-0' style={{ backgroundColor: "transparent" }} onClick={(e) => deleteEmployee(e, i.id)}>
                    <i className="fa-solid fa-trash" style={{ color: "red" }} ></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default EmployeeTable;
