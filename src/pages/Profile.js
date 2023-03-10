import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import logo from "../assets/logo.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { NavLink, Link } from "react-router-dom";
import "../App.css"

const Profile = ({ questionId }) => {
  const [userProfile, setUserProfile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/user", {
        headers: { Authorization: "Bearer " + storedToken },
      })
      .then((response) => {
        const user = response.data;
        setUserProfile(user);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">
            Still waiting for second state update of the array so that it can be
            displayed.
          </span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      {/* when the user is loaded and therefore not null, we render the info*/}
      {userProfile === null ? (
        "loading answers ..."
      ) : (
        <div>
          <div>
          <div className="profile-card">
            <MDBContainer>
              <MDBRow className="justify-content-center">
                <MDBCol md="9" lg="7" xl="5" className="mt-5">
                  <MDBCard style={{ borderRadius: "15px" }}>
                    <MDBCardBody className="p-4">
                      <div className="d-flex text-black">
                        <div className="flex-shrink-1">
                          <MDBCardImage
                            style={{ width: "180px", borderRadius: "10px" }}
                            // src={userProfile.image}
                            src={logo}
                            alt="Generic placeholder image"
                            fluid
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <MDBCardTitle>{userProfile?.name}</MDBCardTitle>
                          <div className="d-flex justify-content-start rounded-3 p-2 mb-2">
                            <div>
                              <p className="small text-muted mb-1">
                                Questions <br />
                                following
                              </p>
                              <p className="mb-0">
                                {userProfile?.questions.length}
                              </p>
                            </div>
                            <div className="px-3">
                              <p className="small text-muted mb-1">Answers</p>
                              <p className="mb-0">0</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
            <Button variant="warning">
              <NavLink to="/addquestion" className="profile-buttons">create new questions</NavLink>
            </Button>{" "}

            {userProfile.questions.map((question) => {
              return (
                <div className="userQuestions">
                  <Card >
                    <Card.Header>Questions following</Card.Header>
                    <Card.Body>
                      <Card.Title>{question.topic}</Card.Title>
                      <Card.Text>{question.question}</Card.Text>
                      <div className="profile-buttons">
                        <Button variant="warning">
                          <Link to={`/editquestion/${question._id}`}>Edit</Link>
                        </Button>
                        <Button variant="warning">
                          <Link to={`/addanswer/${question._id}`}>
                            Add an answer
                          </Link>
                        </Button>
                        <Button variant="warning">
                          <Link to={`/answers/${question._id}`}>
                            See all answers
                          </Link>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
