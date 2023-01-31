// import { NavLink } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../context/auth.context";
// import placeholder from "../assets/placeholder_icon.png";

// const Navbar = () => {
//   const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

//   return (
//     <nav className="navbar">
//       <NavLink to="/">
//         <button>Reflekt</button>
//       </NavLink>
//       <NavLink to="/articles">
//         <button>articles</button>
//       </NavLink>
//       <NavLink to="/about">
//         <button>about us</button>
//       </NavLink>
//       <NavLink to="/start">
//         <button>start reflekting</button>
//       </NavLink>
//       {isLoggedIn && (
//         <>
//           <NavLink to="/myreflekt">
//             <button>my Reflekt</button>
//           </NavLink>
//           <button onClick={logOutUser}>Logout</button>
//           <span>{user && user.name}</span>
//           <img src={placeholder} alt="profile" />
//         </>
//       )}
//       {!isLoggedIn && (
//         <>
//           <NavLink to="/login">
//             <button>log in</button>
//           </NavLink>

//           <NavLink to="/signup">
//             <button>Try it now</button>
//           </NavLink>
//         </>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

//////////////////////////////////////////////////////////////////////////////////

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const NavbarResponsive = () => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Reflekt</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/articles">Articles</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/start">Start Reflekting</Nav.Link>
          </Nav>
          {isLoggedIn && (
            <>
              <Nav.Link href="/myreflekt">My Reflekt</Nav.Link>
              <button onClick={logOutUser}>Logout</button>
              <span>{user && user.name}</span>
            </>
          )}

          <Nav>
            {!isLoggedIn && (
              <>
                <Nav.Link href="/login">Log in</Nav.Link>
                <Nav.Link href="/signup">Try it now</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarResponsive;
