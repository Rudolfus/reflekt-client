import { NavLink } from "react-router-dom";

const TopicCard = () => {
  return (
    <div>
      <section>
        <NavLink to="/question/self-care">self-care
          {/* <button className="button accept-btn" onClick="addAnimation2()">
            self-care
          </button> */}
        </NavLink>

        <NavLink to="/question/smoking">smoking
          {/* <button className="button accept-btn" onClick="addAnimation2()">
            smoking
          </button> */}
        </NavLink>

        <NavLink to="/question/job">job
          {/* <button className="button accept-btn" onClick="addAnimation2()">
            job
          </button> */}
        </NavLink>

        <NavLink to="/question/motivation"> motivation
          {/* <button className="button accept-btn" onClick="addAnimation2()">
            motivation
          </button> */}
        </NavLink>

        <NavLink to="/question/eating"> eating
          {/* <button className="button accept-btn" onClick="addAnimation2()">
            eating
          </button> */}
        </NavLink>

        <NavLink to="/question/relationships"> relationships
          {/* <button className="button accept-btn" onClick="addAnimation2()">
            relationships
          </button>
        </NavLink> */}
      </section>
    </div>
  );
};

export default TopicCard;
