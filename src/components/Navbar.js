import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import "../App.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavbarNew = () => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <Navbar bg="light" variant="light" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/">
          Reflekt
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/articles">
              articles
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              about us
            </Nav.Link>
            <Nav.Link as={Link} to="/start">
              start reflekting
            </Nav.Link>
            {isLoggedIn && (
              <>
                <Nav.Link as={Link} to="/myreflekt">
                  profile
                </Nav.Link>
                <Button variant="light" onClick={logOutUser}>
                  Log out
                </Button>{" "}
                <Navbar.Text>Signed in as: {user && user.name}</Navbar.Text>
                <Navbar.Brand as={Link} to="/">
                  <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                  />
                </Navbar.Brand>
              </>
            )}
            {!isLoggedIn && (
              <>
                <Nav.Link as={Link} to="/login">
                  Log in
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Try it now
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarNew;
