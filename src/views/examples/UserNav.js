import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './UserNav.css'


// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";



function UserNav() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const navigate=useNavigate()
  const handleUserLogout=()=>{
    localStorage.removeItem("token")
    navigate("/index")
  }

  return (
    <>
      {collapseOpen ? (
        <div 
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar  className={"fixed-top  fs-1" + navbarColor} expand="lg" color="light">
        <Container  className="font"   >
          <div className="navbar-translate, fadeInAnimation">
            <NavbarBrand
              target="_blank"
              id="navbar-brand"
              style={{color:'red'}}
            >
              <b>call 0120 for emergencies </b>
          
            </NavbarBrand>
            
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem  >
                <NavLink
                  href="/index"
                 
                >
                  <i className="now-ui-icons   "></i>
                  <p                style={{color:'red',fontSize:'large'}}
  >   <b  >Home </b>   </p>
 
                </NavLink>
              </NavItem>
              <NavItem  >
                <NavLink
                  href="/landing-page"
                 
                >
                  <i className="now-ui-icons   "></i>
                  <p                style={{color:'red',fontSize:'large'}}
  >   <b  >About Us </b>   </p>
 
                </NavLink>
              </NavItem>
              <NavItem  >
                <NavLink
                  href="/contact"
                 
                >
                  <i className="now-ui-icons   "></i>
                  <p                style={{color:'red',fontSize:'large'}}
  >   <b  >Contact Us </b>   </p>
 
                </NavLink>
              </NavItem>
              <NavItem  >
                <NavLink
                  href="/profile-page"
                 
                >
                  <i className="now-ui-icons   "></i>
                  <p                style={{color:'red',fontSize:'large'}}
  >   <b  >Gallery </b>   </p>
 
                </NavLink>
              </NavItem>
              <NavItem  >
                <NavLink
                  onClick={handleUserLogout}
                 
                >
                  <i className="now-ui-icons   "></i>
                  <p                style={{color:'red',fontSize:'large'}}
  >   <b  >Logout </b>   </p>
 
                </NavLink>
              </NavItem>
                
              
              
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default UserNav;
