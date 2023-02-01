import "../App.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import tree from "../assets/R-Illu-3-baum.png";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

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
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody onSubmit={handleSignupSubmit}>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Your Name"
                  name="name"
                  value={name}
                  onChange={handleName}
                  id="form1"
                  type="text"
                  className="w-100"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label="Your Email"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                  id="form2"
                  type="email"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput
                  label="Password"
                  name="password"
                  value={password}
                  onChange={handlePassword}
                  id="form3"
                  type="password"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput
                  label="Repeat your password"
                  id="form4"
                  type="password"
                />
              </div>

              <MDBBtn type="submit" className="mb-4" color="warning" size="lg">
                Register
              </MDBBtn>

              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <br />
              <p>Already have an account?</p>

              <NavLink to="/login">Log in</NavLink>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage src={tree} fluid />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>

    // <div className="SignupPage">
    //   <h1>Sign Up</h1>

    //   <form onSubmit={handleSignupSubmit}>
    //     <label>Email:</label>
    //     <input type="email" name="email" value={email} onChange={handleEmail} />

    //     <label>Password:</label>
    //     <input
    //       type="password"
    //       name="password"
    //       value={password}
    //       onChange={handlePassword}
    //     />

    //     <label>Name:</label>
    //     <input type="text" name="name" value={name} onChange={handleName} />

    //     <button type="submit">Sign Up</button>
    //   </form>

    //   {errorMessage && <p className="error-message">{errorMessage}</p>}
    //   <br />
    //   <p>Already have account?</p>
    //   <NavLink to="/login"> Log in</NavLink>
    //   {/* <NavLink>
    //     <div class="ta-c padT150 padB150">
    //       <button class="button accept-btn" onClick="addAnimation2()">
    //         Log in
    //       </button>
    //     </div>
    //   </NavLink> */}
    //   <img src={tree} className="full-width-img" alt="wave-placeholder" />
    // </div>
  );
}

export default SignupPage;
