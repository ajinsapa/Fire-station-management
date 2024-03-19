import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';import { useNavigate } from 'react-router-dom';
;





function StationNav() {

  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem("token")
    navigate("/index")
  }


  return (
    <div  >


<Navbar style={{backgroundColor:"red"}}>
      <Container  >
        <Navbar.Brand  style={{color:"white"}} href="#home">Nova Fire And Rescue Services</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
             <a onClick={handleLogout} style={{color:"White"}} >Logout</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>








    </div>
  )
}

export default StationNav