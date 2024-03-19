import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

const EmployeeNav = () => {
  const navigate=useNavigate()
  const handleEmployeeLogout=()=>{
    localStorage.removeItem("token")
    navigate("/index")
  }


  return (
    <Navbar color="dark" dark expand="md">
      <NavLink href="/" className="navbar-brand">Nova Fire And Rescue Services</NavLink> {/* Brand name */}
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink 
          
        onClick={handleEmployeeLogout}  >Logout</NavLink> {/* Link to dashboard */}
        </NavItem>
        
        
      </Nav>
    </Navbar>
  );
};

export default EmployeeNav;
