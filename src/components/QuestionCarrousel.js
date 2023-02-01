import Carousel from "react-bootstrap/Carousel";
import quote1 from "../assets/quote1.png";
import quote2 from "../assets/quote2.png";
import quote3 from "../assets/quote3.png";

function QuestionCarrousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={quote1} alt="First quote" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={quote2} alt="Second quote" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={quote3} alt="Third quote" />
      </Carousel.Item>
    </Carousel>
  );
}

export default QuestionCarrousel;
