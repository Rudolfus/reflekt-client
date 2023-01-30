import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import placeholder from "../assets/placeholder_icon.png";

const Navbar = () => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <NavLink to="/">
        <button>Reflekt</button>
      </NavLink>
      <NavLink to="/articles">
        <button>articles</button>
      </NavLink>
      <NavLink to="/about">
        <button>about us</button>
      </NavLink>
      <NavLink to="/start">
        <button>start reflekting</button>
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink to="/myreflekt">
            <button>my Reflekt</button>
          </NavLink>
          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
          <img src={placeholder} alt="profile" />
        </>
      )}
      {!isLoggedIn && (
        <>
          <NavLink to="/login">
            <button>log in</button>
          </NavLink>

          <NavLink to="/signup">
            <button>Try it now</button>
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
