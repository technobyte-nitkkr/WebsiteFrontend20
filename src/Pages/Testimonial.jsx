import { React } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import reviews from "../testimonials.json";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import './testimonial.scss';
import './testimonial.css';

function Testimonial() {
  return (
    <div className="testimonial">
      <h1>Testimonials</h1>
      <Container className='testcontainer'>
        <Row>
          {reviews.data.map((item,index)=>(
            <Col xl={3} md={3} sm={12}>
              <Card className="testCard category-card">
                  <div className="box-triangle">
                    <h3>“</h3>
                    <p style={{fontSize:"15px"}}>
                      {item.review}
                    </p>
                    <h3>”</h3>
                  </div>
                  <Container className='testcontainer'>
                  <Row className="testrow">
                    <Col xl={3}>
                      <img src={item.imageUrl} className="testimg"/>
                    </Col>
                    <Col xl={9} style={{textAlign:"center"}}>
                        <p>{item.name}</p>
                        <p>{item.branch}, {item.year} year</p>
                    </Col>
                  </Row>
                  </Container>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export {Testimonial};
