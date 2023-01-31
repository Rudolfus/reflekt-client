import ".././App.css";
import { NavLink } from "react-router-dom";
import TopicCard from "../components/TopicCard";

const SelectMode = () => {
  return (
    <div>
      <TopicCard />

      <NavLink to="/addquestion">
        <button className="button accept-btn-create" onClick="addAnimation2()">
          create new questions
        </button>
      </NavLink>
    </div>
  );
};

export default SelectMode;
