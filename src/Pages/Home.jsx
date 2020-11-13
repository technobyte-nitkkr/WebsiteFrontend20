
import { React } from "react";
import {Container,Row,Col} from 'react-bootstrap';
const Home = () => {
  return (
    <div>
      <Container>
        <div className="bar">
          <i class="primary md fa fa-user" aria-hidden="true"></i>
        </div>
      </Container>
      <Container className="center">
        <h1 className="hometitle">ALTIUS</h1>
      </Container>
      <Container>
        <Row className="homerow">
        <Col md={2}  xl={2} sm={4} xs={4}>
          <div>
            <div className="circle"></div>
          </div>
          <div>About</div>
        </Col>
        <Col md={2} xl={2} sm={4} xs={4}>
          <div className="homecir">
            <div className="circle"></div>
          </div>
          <div>Category</div>
        </Col>
        <Col md={2} xl={2} sm={4} xs={4} >
          <div className="circle">
          </div>
          <div>Ask Query</div>
        </Col>
        <Col md={2} xl={2} sm={4} xs={4}>
          <div className="circle"></div>
          <div>Contact</div>
        </Col>
        <Col  md={2} xl={2} sm={4} xs={4}>
          <div className="circle"></div>
          <div>Devs</div>
        </Col>
        <Col  md={2} xl={2} sm={4} xs={4} >
          <div className="circle"></div>
          <div>Lectures</div>
        </Col>
        </Row>
      </Container>
    </div>
  );
};

export { Home };

