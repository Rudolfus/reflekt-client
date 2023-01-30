import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

const Profile = () => {
  const [usersArr, setUsersArr] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { userId } = useParams();
  const { user, storeToken } = useContext(AuthContext);

  // const showUser = () => {
  //   // Get the stored token from the localStorage
  //   const storedToken = localStorage.getItem("authToken");

  //   // If the token exists in the localStorage
  // if (storedToken) {
  // We must send the JWT token in the request's "Authorization" Headers
  // axios
  //   .get(`${process.env.REACT_APP_API_URL}/users/` + {user._id}, {
  //     headers: { Authorization: `Bearer ${storedToken}` },
  //   })
  //   .then((response) => {
  //     // If the server verifies that the JWT token is valid
  //     const user = response.data;
  //     // Update state variables
  //     setUser(user);
  //   })
  //   .catch((error) => {
  //     // If the server sends an error response (invalid token)
  //     // Update state variables
  //     setUser(null);
  //   });
  //   } else {
  //     // If the token is not available (or is removed)
  //     setUser(null);
  //   }
  // };

  // useEffect(() => {
  //   showUser();
  // }, []);

  if (isLoading) {
    return (
      <div>
        Still waiting for second state update of the array so that it can be
        displayed.
      </div>
    );
  }

  const oneSingleUser = usersArr.find((userDetails) => {
    return userDetails._id === userId;
  });

  return (
    <div>
      {usersArr === null ? (
        "loading answers ..."
      ) : (
        <div>
          <div>
            This is the profile card
            <div>{oneSingleUser.image}</div>
            <h1>{user.name}</h1>
            <p>Acount & Settings</p>
            <h3>{oneSingleUser.questions.length} Total questions following</h3>
          </div>
          <section>
            <h4>{oneSingleUser.name}</h4>
            <button>edit</button>
            <hr></hr>
            <h4>{oneSingleUser.email}</h4>
            <button>edit</button>
            <hr></hr>
            {/* <h4>{oneSingleUser.password}</h4>
                  <button>edit</button>
                  <hr></hr> */}
          </section>
          {/* <Link to logout */}
          <button>delete</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
