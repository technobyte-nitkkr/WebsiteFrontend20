import { React } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import info from "../info.json";
import img from "../videos/imagebg2.png";
import CR1 from "../videos/cr1.jpg";
import CR2 from "../videos/cr2.jpg";
import CR3 from "../videos/cr3.jpg";
import CR4 from "../videos/cr4.jpg";
import CR5 from "../videos/cr5.jpg";
import CR6 from "../videos/cr6.jpg";
import designic from "../videos/design.jpg";
import roboic from "../videos/roboic.jpg";
import mangic from "../videos/mangic.png";
import technophiles from "../videos/technoicon.png";
import aeroic from "../videos/aeroic.jpg";
import payic from "../videos/payic.png";
import funic from "../videos/funic.png";
import quizic from "../videos/quizic.png";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div className="about-div">
      <h1 className="headlineabout">{info.headline}</h1>
      <div className="aboutscroll">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-85 aboutimg" alt="" src={CR1} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-85 aboutimg" alt="" src={CR2} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-85 aboutimg" alt="" src={CR3} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-85 aboutimg" alt="" src={CR4} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-85 aboutimg" alt="" src={CR5} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-85 aboutimg" alt="" src={CR6} />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="holder">
        <p className="aboutinform">{info.description1}</p>
        <p className="aboutinform">{info.description2}</p>
        <p className="aboutinform">{info.description3}</p>
      </div>
      <Container>
        <Row>
          <Col>
            <Card bg={"dark"} text={"white"} className="mb-2">
              <Card.Header>
                <img src={designic} alt="" className="iconimg" />
              </Card.Header>
              <Card.Body>
                <Card.Title>Design </Card.Title>
                <Card.Text>
                  Build-em-all , E-modeling ,junkyard wards , Micro controller
                  challenge, Roller coaster, Town planning
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg={"dark"} text={"white"} className="mb-2">
              <Card.Header>
                <img src={technophiles} alt="" className="iconimg" />
              </Card.Header>
              <Card.Body>
                <Card.Title> Technophiles </Card.Title>
                <Card.Text>Excalibur, Encoder, Ingenuity</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg={"dark"} text={"white"} className="mb-2">
              <Card.Header>
                <img src={roboic} alt="" className="iconimg" />
              </Card.Header>
              <Card.Body>
                <Card.Title> Robotics </Card.Title>
                <Card.Text>Robo Soccers</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg={"dark"} text={"white"} className="mb-2">
              <Card.Header>
                <img src={mangic} alt="" className="iconimg" />
              </Card.Header>
              <Card.Body>
                <Card.Title> Managerial </Card.Title>
                <Card.Text>Apprentice, crescendo, Big fight</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Card bg={"dark"} text={"white"} className="mb-2">
              <Card.Header>
                <img src={aeroic} alt="" className="iconimg" />
              </Card.Header>
              <Card.Body>
                <Card.Title>AeroModeling </Card.Title>
                <Card.Text>Albatross, boomerang</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg={"dark"} text={"white"} className="mb-2">
              <Card.Header>
                <img src={payic} alt="" className="iconimg" />
              </Card.Header>
              <Card.Body>
                <Card.Title> Papyrus vitae </Card.Title>
                <Card.Text>Civeria, MicroSearch , Technova</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg={"dark"} text={"white"} className="mb-2">
              <Card.Header>
                <img src={funic} alt="" className="iconimg" />
              </Card.Header>
              <Card.Body>
                <Card.Title> Funzone </Card.Title>
                <Card.Text>Black Box, Game Station, Mr & Miss NITK</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg={"dark"} text={"white"} className="mb-2">
              <Card.Header>
                <img src={quizic} alt="" className="iconimg" />
              </Card.Header>
              <Card.Body>
                <Card.Title> Quizes </Card.Title>
                <Card.Text>Axiom, CV-Q Mastishk</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <h1 className="headlineabout smaller">Watch video for more info...</h1>
      <iframe
        width="80%"
        height="500vh"
        src="https://www.youtube.com/embed/NyHq7Pp1PuY"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export { About };
