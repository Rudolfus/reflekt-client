import InfoBox from "../components/InfoBox";
import QuestionCarrousel from "../components/QuestionCarrousel";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { MDBBtn } from "mdb-react-ui-kit";
import "../App.css";
import Footer from "../components/Footer";

const HomePage = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <h1 className="welcome-heading">Change starts in the mind.</h1>
      <InfoBox />
      <QuestionCarrousel />

      {isLoggedIn && (
        <>
          <MDBBtn color="warning" size="lg" className="me-2 start-try" active>
            <NavLink to="/start">Start reflekting</NavLink>
          </MDBBtn>
        </>
      )}

      {!isLoggedIn && (
        <>
          <MDBBtn color="warning" size="lg" className="me-2 start-try" active>
            <NavLink to="/signup">Try it now</NavLink>
          </MDBBtn>
        </>
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
