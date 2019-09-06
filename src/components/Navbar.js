import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navbar1(){
    return(
        <div className="navbardiv">
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Search Books Online</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/saved">Your Saved Books</Nav.Link>
      <Nav.Link href="/">Back to Browse</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Navbar1;