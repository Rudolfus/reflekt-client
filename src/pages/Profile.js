import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [userProfile, setUserProfile] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/user", {
        headers: { Authorization: "Bearer " + storedToken },
      })
      .then((response) => {
        const user = response.data;
        // console.log(user);

        setIsLoading(false);
        setUserProfile(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        Still waiting for second state update of the array so that it can be
        displayed.
      </div>
    );
  }

  return (
    <div>
      {userProfile === null ? (
        "loading answers ..."
      ) : (
        <div>
          <div>
            <img
              src={userProfile.image}
              width="100"
              height="100"
              alt="profile-pic"
            />
            <h1>{userProfile.name}</h1>
            <p>Acount & Settings</p>
            <h3>{userProfile.questions.length} questions</h3>
            <p>Total questions following</p>
          </div>
          {/* <section>
            <h4>{userProfile.name}</h4>
            <button>edit</button>
            <hr></hr>
            <h4>{userProfile.email}</h4>
            <button>edit</button>
            <hr></hr>
          </section> */}
          <button>delete</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
