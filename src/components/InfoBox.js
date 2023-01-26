import React from 'react'
import placeholder from "../assets/placeholder_icon.png";

const InfoBox = () => {
  return (
    <div>
      <div>
        <div>
          <img src={placeholder} alt="icon" />
        </div>
        <h4>Lower stress and improve your relationships.</h4>
        <p>
          Reflekt helps with stress management and emotional regulation by
          providing an outlet for expressing thoughts and feelings.
        </p>
      </div>

      <div>
        <div>
          <img src={placeholder} alt="icon" />
        </div>
        <h4>Change your perception.</h4>
        <p>
          Reflekt improves self-awareness and insight by allowing individuals to
          reflect on their experiences and gain a better understanding of
          themselves and their behaviors.
        </p>
      </div>

      <div>
        <div>
          <img src={placeholder} alt="icon" />
        </div>
        <h4>Reach your goals by choosing your attitude.</h4>
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