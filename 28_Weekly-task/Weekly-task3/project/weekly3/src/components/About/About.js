import { Container, Row, Col } from "react-bootstrap";
import hamilton from "../img/hamilton.jpg";

const About = () => {
  return (
    <div>
      <Container>
        <br />
        <h1>About</h1>
        <Row>
          <Col md={15} id="about">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={hamilton} className="flex w-50 justify-content-center items-align-center" alt="hamilton" />
                  <p>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
