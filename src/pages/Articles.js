import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import "../App.css";
import YoutubeEmbed from "../components/YoutubeEmbed";

const Articles = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      <h1>The Science behind Reflekt</h1>
      <p>1 - 2 sentences about Reflekt being science-backed</p>
      <h2>Our Approach</h2>
      <p>
        Reflekt can have numerous benefits for you. It can serve as a tool for
        self-reflection, helping you to better understand your thoughts and
        emotions. Reflekt can also be used as a means of tracking personal
        growth and progress over time. Also, Reflekt can also be a useful tool
        for problem-solving and decision-making, as it allows you to organize
        your thoughts and ideas in a clear and concise manner. Additionally,
        Reflekt can be a therapeutic tool to help process emotions and cope with
        stress. Overall, Reflekt can be a valuable tool for personal development
        and self-care.
      </p>
      <h2>The Benefits</h2>
      <p>
        Some numbers and statistics abobut positive psychologoy and journaling
        <br />
        There are thousands of studies that have shown mindfulness and
        journaling can positively impact mental and physical health, whether
        it’s by reducing stress, improving sleep, increasing focus, or improving
        relationships. The proof is in the science: Reflekt can make a big
        impact on people’s lives — and it doesn’t take long to see the benefits.
      </p>
      <h2>More resources</h2>
      <p>Here go links to youtube videos</p>
      <h2>Tackle Dissatisfaction</h2>
      <YoutubeEmbed embedId="WPPPFqsECz0?modestbranding=1" />
      <h2>Our Research</h2>
      <p>Here go links to research papers</p>
      {isLoggedIn && (
        <>
          <NavLink to="/myreflekt">
            <button>Start reflekting</button>
          </NavLink>
        </>
      )}
      {!isLoggedIn && (
        <>
          <NavLink to="/signup">
            <button>Try it now</button>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Articles;
