import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

const TopicCard = () => {
  return (
    <div>
      <section>
        <Button variant="light">
          <NavLink to="/question/self-care">self-care</NavLink>
        </Button>{" "}
        <Button variant="light">
          {" "}
          <NavLink to="/question/smoking">smoking</NavLink>
        </Button>{" "}
        <Button variant="light">
          {" "}
          <NavLink to="/question/job">job</NavLink>
        </Button>{" "}
        <Button variant="light">
          {" "}
          <NavLink to="/question/motivation"> motivation</NavLink>
        </Button>{" "}
        <Button variant="light">
          {" "}
          <NavLink to="/question/eating"> eating</NavLink>
        </Button>{" "}
        <Button variant="light">
          {" "}
          <NavLink to="/question/relationships"> relationships</NavLink>
        </Button>{" "}
      </section>
    </div>
  );
};

export default TopicCard;
