import React from 'react'
import logo from "../assets/logo.png";

const InfoBox = () => {
  return (
    <div>
      <div className="homepage-text-block">
        <div>
          <img src={logo} width="100" height="100" alt="icon" />
        </div>
        <h2 className="sub-headings-homepage">
          Lower stress and improve your relationships.
        </h2>
        <p>
          Reflekt helps with stress management and emotional regulation by
          providing an outlet for expressing thoughts and feelings.
        </p>
      </div>

      <div className="homepage-text-block">
        <div>
          <img src={logo} width="100" height="100" alt="icon" />
        </div>
        <h2 className="sub-headings-homepage">Change your perception.</h2>
        <p>
          Reflekt improves self-awareness and insight by allowing individuals to
          reflect on their experiences and gain a better understanding of
          themselves and their behaviors.
        </p>
      </div>

      <div className="homepage-text-block">
        <div>
          <img src={logo} width="100" height="100" alt="icon" />
        </div>
        <h2 className="sub-headings-homepage">
          Reach your goals by choosing your attitude.
        </h2>
        <p>
          Reflekt also aids in goal setting and achieving personal growth by
          allowing individuals to track their progress and make plans for future
          development.
        </p>
      </div>
    </div>
  );
};

export default InfoBox