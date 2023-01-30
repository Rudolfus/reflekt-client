import "../App.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import tree from "../assets/R-Illu-3-baum.png";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  /* get authenticateUser from the context */
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, requestBody)
      .then((response) => {
        return axios.post(
          `${process.env.REACT_APP_API_URL}/auth/login`,
          requestBody
        );
      })

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
    <div className="SignupPage">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <br />
      <p>Already have account?</p>
      <Link to="/login">
        <div class="ta-c padT150 padB150">
          <button class="button accept-btn" onclick="addAnimation2()">
            Log in
          </button>
        </div>
      </Link>
      <img src={tree} className="full-width-img" alt="wave-placeholder" />
    </div>
  );
}

export default SignupPage;
