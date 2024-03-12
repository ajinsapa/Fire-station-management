import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

const EmployeeNav = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <NavLink href="/" className="navbar-brand">Nova Fire And Rescue Services</NavLink> {/* Brand name */}
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/dashboard">Logout</NavLink> {/* Link to dashboard */}
        </NavItem>
        
        
      </Nav>
    </Navbar>
  );
};

export default EmployeeNav;
