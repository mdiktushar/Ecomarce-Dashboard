import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper">
            {localStorage.getItem("user-info") ? (
              <>
                <Link to="/add">Add Products</Link>
                <Link to="/update">Update Product</Link>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/registration">Registration</Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
