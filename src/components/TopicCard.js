import { NavLink } from "react-router-dom";

const TopicCard = () => {
  return (
    <div>
      <section>
        <NavLink to="/question/self-care">
          <button>self-care</button>
        </NavLink>

        <NavLink to="/question/smoking">
          <button>smoking</button>
        </NavLink>

        <NavLink to="/">
          <button>job</button>
        </NavLink>

        <NavLink to="/">
          <button>motivation</button>
        </NavLink>

        <NavLink to="/">
          <button>eating</button>
        </NavLink>

        <NavLink to="/">
          <button>relationship</button>
        </NavLink>
      </section>
    </div>
  );
};

export default TopicCard;
