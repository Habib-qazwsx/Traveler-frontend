import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const {user, logOut} = useAuth();
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand='lg'>
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/packages">Packages</Nav.Link>
            <Nav.Link as={Link} to="/bookingpackages">My Packages</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About US</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={Link} to="/login">
          {user?.email ?
           <Button onClick={logOut} variant="light">Logout</Button>:
           <Button variant="secondary">Login</Button>
          }
          </Nav.Link>
            <Navbar.Text>
              Sign in as: <a herf="#login"> {user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
