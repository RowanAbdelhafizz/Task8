import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router-dom";

export default class Header extends React.Component { 
  render() {
  
    return (
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {}
                {}
                <NavLink to="/" className='nav-link' >Home</NavLink>
                <NavLink to="/products" className='nav-link'>Products</NavLink>
                <NavLink to="/aboutUs" className='nav-link'>About US</NavLink>
                <NavLink to="/contactUs" className='nav-link'>Contact Us </NavLink>
                <NavLink to="/join" className='nav-link'>Join Us </NavLink>
                {}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
