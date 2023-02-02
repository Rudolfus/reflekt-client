import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import "../App.css";
import YoutubeEmbed from "../components/YoutubeEmbed";
import { MDBBtn } from "mdb-react-ui-kit";

const Articles = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      <div className="articles-text-block">
        <h1 className="articles-heading">The Science behind Reflekt</h1>
        <p>
          Our goal is to support your development — but the only way to know if
          we’re truly accomplishing that is to measure, test, and study it.
          That’s where our research comes in.
        </p>
      </div>
      <div className="articles-text-block">
        <h1 className="articles-heading">Our Approach</h1>
        <p>
          Reflekt can serve as a tool for self-reflection, helping you to better
          understand your thoughts and emotions. It can also be used as a means
          of tracking personal growth and progress over time. Also, Reflekt can
          be a useful tool for problem-solving and decision-making, as it allows
          you to organize your thoughts and ideas in a clear and concise manner.
        </p>
      </div>
      <div>
        <iframe
          src="https://www.nytimes.com/svc/oembed/html/?url=https%3A%2F%2Fwww.nytimes.com%2F2019%2F01%2F23%2Flearning%2Fempathy-and-resilience-responsibility-and-self-care-resources-for-social-and-emotional-learning-from-the-new-york-times.html"
          allowtransparency="true"
          title="Empathy and Resilience, Responsibility and Self-Care: Resources for Social and Emotional Learning From The New York Times"
        ></iframe>
      </div>
      <div className="articles-text-block">
        <h1 className="articles-heading">The Benefits</h1>
        <p>
          Some numbers and statistics abobut positive psychologoy and journaling
          <br />
          There are thousands of studies that have shown mindfulness and
          journaling can positively impact mental and physical health, whether
          it’s by reducing stress, improving sleep, increasing focus, or
          improving relationships. The proof is in the science: Reflekt can make
          a big impact on people’s lives — and it doesn’t take long to see the
          benefits.
        </p>
      </div>
      <h1 className="articles-heading">Tackle Dissatisfaction</h1>
      <div className="video">
        <YoutubeEmbed embedId="WPPPFqsECz0?modestbranding=1" />
      </div>
      <h1 className="articles-heading">
        Positive Thinking Works Even When It Fails
      </h1>
      <div className="video">
        <YoutubeEmbed embedId="kixHAWx2mkc?modestbranding=1" />
      </div>
      <h1 className="articles-heading">
        Change Your Life – One Tiny Step at a Time
      </h1>
      <div className="video">
        <YoutubeEmbed embedId="75d_29QWELk?modestbranding=1" />
      </div>
      <h1 className="articles-heading">Research</h1>
      <h2>
        "Positive Affect Journaling may be integrated into routine medical care
        to improve quality of life."
      </h2>
      <p>
        <a
          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6305886/"
          target="_blank"
          rel="noreferrer"
        >
          Research Paper on the efficacy of reflekting
        </a>
      </p>
      <br />
      <h3>How to reflekt</h3>
      <p>
        <a
          href="https://www.ed.ac.uk/reflection/reflectors-toolkit/all-tools"
          target="_blank"
          rel="noreferrer"
        >
          List of tools for reflektion by the University of Edinburgh
        </a>
      </p>
      <br />

      {isLoggedIn && (
        <>
          <MDBBtn color="warning" size="lg" className="me-2 start-try" active>
            <NavLink to="/start">Start reflekting</NavLink>
          </MDBBtn>
        </>
      )}

      {!isLoggedIn && (
        <>
          <MDBBtn color="warning" size="lg" className="me-2 start-try" active>
            <NavLink to="/signup">Try it now</NavLink>
          </MDBBtn>
        </>
      )}
    </div>
  );
};

export default Articles;
