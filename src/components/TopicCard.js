import { NavLink } from "react-router-dom";

const TopicCard = () => {
  return (
    <div>
      <section>
        <NavLink to="/question/self-care">
          <button className="button accept-btn" onClick="addAnimation2()">
            self-care
          </button>
        </NavLink>

        <NavLink to="/question/smoking">
          <button className="button accept-btn" onClick="addAnimation2()">
            smoking
          </button>
        </NavLink>

        <NavLink to="/question/job">
          <button className="button accept-btn" onClick="addAnimation2()">
            job
          </button>
        </NavLink>

        <NavLink to="/question/motivation">
          <button className="button accept-btn" onClick="addAnimation2()">
            motivation
          </button>
        </NavLink>

        <NavLink to="/question/eating">
          <button className="button accept-btn" onClick="addAnimation2()">
            eating
          </button>
        </NavLink>

        <NavLink to="/question/relationships">
          <button className="button accept-btn" onClick="addAnimation2()">
            relationships
          </button>
        </NavLink>
      </section>
    </div>
  );
};

export default TopicCard;
