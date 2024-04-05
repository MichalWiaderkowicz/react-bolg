import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();
  console.log("location---", location);
  return (
    <Navbar
      expand="lg"
      bg="primary"
      variant="dark"
      className="mt-4 mb-4 rounded"
    >
      <Container>
        <Navbar.Brand href="/">Blog.app</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link
            as={NavLink}
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/categories"
            className={location.pathname === "/categories" ? "active" : ""}
          >
            Categories
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            about
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
