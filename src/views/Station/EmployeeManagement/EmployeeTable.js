import React from 'react'
import Table from 'react-bootstrap/Table';
function EmployeeTable() {
  return (
    <div   className='table m-5' >


<Table style={{backgroundColor:"white"}} striped bordered hover   className='text-center ' >
      <thead>
        <tr style={{backgroundColor:"brown", color:"white"}}   >
          <th    >#</th>
          <th>Employee Name</th>
          <th>Phone Number</th>
          <th>Email Address</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Ajinsa P A</td>
          <td>7012159314</td>
          <td>ajinsaashik008@gmail.com</td>
          <td>

          <i class="fa-solid fa-trash"  style={{color:"red"}} ></i>

          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Parvathy Raju</td>
          <td>1234567891</td>
          <td>parvathy@gmail.com</td>
          <td>

          <i class="fa-solid fa-trash"  style={{color:"red"}} ></i>

          </td>
        </tr>

      </tbody>
    </Table>















    </div>
  )
}

export default EmployeeTable