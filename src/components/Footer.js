import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import github from "../assets/github-icon.png";
import linkedin from "../assets/linkedin-icon.svg";

const Footer = () => {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted"
      expand={"sm" | "md" | "lg" | "xl" | "xxl"}
    >
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footer-header d-flex justify-content-center p-4">
                <MDBIcon icon="gem" className="me-3" />
                Get in touch
              </h6>
              <div className="d-flex justify-content-center p-4">
                <a
                  href="https://www.linkedin.com/in/rudolfteibtner/"
                  className="me-4 text-reset"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="logo" width="30" />
                </a>
                <a
                  href="https://github.com/Rudolfus"
                  target="_blank"
                  rel="noreferrer"
                  className="me-4 text-reset"
                >
                  <img src={github} alt="logo" width="30" />
                </a>
              </div>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footer-header">
                Contact
              </h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Berlin, Germany
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                rudolfteibtner@mailbox.org
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 49 1764 2075 932
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023:
        <a className="text-reset fw-bold" href="https://github.com/Rudolfus">
          Rudolf Teibtner
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
