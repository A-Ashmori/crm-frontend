import React from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import logo from "../../assets/img/logo.png";

export const Header = () => {
  return (
    <Navbar collapseOnSelect variant="dark" bg="info" expand="md">
      <Navbar.Brand>
        <img src={logo} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
          <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/Tickets">Tickets</Nav.Link>
          <Nav.Link href="/Logout">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
