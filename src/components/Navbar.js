import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>LOGO</div>
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

      <NavLink to="/myreflect">
        <button>my Reflekt</button>
      </NavLink>

      <NavLink to="/">
        <button>log out</button>
      </NavLink>

      <NavLink to="/signup">
        <button>log in</button>
      </NavLink>

      <NavLink to="/signup">
        <button>Try it now</button>
      </NavLink>
    </nav>
  );
};

export default Navbar;
