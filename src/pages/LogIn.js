import { useState, useContext } from "react";
import "../App.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import tree from "../assets/R-Illu-3-baum.png";

function LogIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  /* get authenticateUser from the context */
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, requestBody)
      .then((response) => {
        // Request to the server's endpoint `/auth/login` returns a response
        // with the JWT string ->  response.data.authToken
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);

        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <br />
      <p>Don't have an account yet?</p>

      <NavLink to="/signup">Try it now</NavLink>
      {/* <div class="ta-c padT150 padB150">
        <button class="button accept-btn" onClick="addAnimation2()">
          <Link to="/signup">Try it now</Link>
        </button>
      </div> */}
      <img src={tree} className="full-width-img" alt="wave-placeholder" />
    </div>
  );
}

export default LogIn;
