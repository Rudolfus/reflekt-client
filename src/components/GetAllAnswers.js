import "../App.css";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const GetAllAnswers = ({ answersArr, isLoading }) => {
  const navigate = useNavigate();
  const { Id } = useParams();

  const goBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return (
      <div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  // compare both and return the matching elements
  const answersOfOneQue = answersArr.filter((answer) => answer.question === Id);
  // expected output: 3 matching answers to one question
  //console.log(answersOfOneQue);

  return (
    <div>
    <div className="allanswers">
      {answersArr === null
        ? "loading answers ..."
        : answersOfOneQue.map((answersOfOneQue) => {
            if (answersOfOneQue.length === 0) {
              return (
                <div>
                  So far, you haven't answered this question.
                  <Link to={`/addanswer/${Id}`}>Add an answer</Link>
                </div>
              );
            } else {
              return (
                <div >
                  <Card key={answersOfOneQue._id} style={{ width: "18rem", margin: "1em"}}>
                    <Card.Header>Answer given on </Card.Header>
                    <Card.Body>
                      <Card.Title>Topic: </Card.Title>
                      <Card.Text>{answersOfOneQue.answer}</Card.Text>
                      <Button variant="warning">
                        <Link to={`/editanswer/${answersOfOneQue._id}`}>
                          edit
                        </Link>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            }
          })}

    </div>
    <Button onClick={goBack} variant="warning">
        back
      </Button>
    </div>
  );
};

export default GetAllAnswers;
