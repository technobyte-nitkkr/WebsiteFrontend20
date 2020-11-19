import { React, useState, useEffect } from "react";
import axios from "axios";
import Key from "../config.keys";
import { Row, Col, Container,Card } from "react-bootstrap";
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Contact() {
        const [items, setData] = useState([]);
        const [error, setError] = useState(false);
        useEffect(() => {
          window.scrollTo(0, 0);
          const getEvents = async () => {
            try {
              const res = await axios.get(`${Key.BASE_API}/contacts`);
              setData([...res.data.data.contacts]);
            } catch (error) {
              setError(true);
              console.log(error);
            }
          };
          getEvents();
        }, []);
        console.log(items);
        const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
        return (
          <div className="mainbox" >
            <div className="mainguest">
              <h1 className="guestheading">Team Altius</h1>
            </div>
            <div>
              <Container style={{display: "block",maxWidth:"98%"}}>
                {items.map((item, index) => (
                  <Row className="guestrow" style={{marginTop:"0"}}>
                    <Col xl={12} md={12} sm={12}>
                      <h1 className="guestname">{item.section}</h1>
                        <Container style={{display: "block",maxWidth:"98%"}}>
                            <Row>
                                {item.people.map((peeps,ind)=>(
                                    <Col xl={3} md={3} sm={6}>
                                        <animated.div
                                            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                            onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                            style={{ transform: props.xys.interpolate(trans) }}
                                            className="contactcard"
                                        >
                                        <Card bg={"dark"} text={"white"}  style={{width:"200px",height:"250px"}}>
                                            <Card.Header>
                                                <img src={peeps.imageUrl} alt="" className="contactimg" style={{ backgroundImage : "url('https://i.pinimg.com/600x315/80/63/35/8063359effd01b990e653bb32a83485d.jpg')",backgroundSize:"80px 100px" } }/>
                                            </Card.Header>
                                            <Card.Body>
                                              <Card.Title><h5>{peeps.name}</h5>  </Card.Title>
                                                <Card.Text>
                                                    <h6>{peeps.post}</h6>
                                                </Card.Text>
                                             </Card.Body>
                                        </Card>
                                        </animated.div>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </Col>
                  </Row>
                ))}
              </Container>
            </div>
          </div>
    )
}

export {Contact};