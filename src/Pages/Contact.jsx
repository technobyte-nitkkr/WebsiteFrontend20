import { React, useState, useEffect } from "react";
import axios from "axios";
import Key from "../config.keys";
import { Row, Col, Container,Card } from "react-bootstrap";
const Contact = () => {
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
        return (
          <div className="mainbox" style={{ backgroundImage : "url('https://lh3.googleusercontent.com/proxy/H4DIDki74DGx7wrqWjxxgkrgWgKOGszSaB1fQRQt6-wSBGfI9LwofoBdc1eTds-Tq3ThNRPfDv0CYi34z8Y59r7bwBXcahAg_2FQvOXfRN4')",backgroundSize:"100% auto" }} >
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
                                    <Col>
                                        <Card bg={"dark"} text={"white"} className="mb-2" style={{borderRadius:"2rem"}}>
                                            <Card.Header>
                                                <img src={peeps.imageUrl} alt="" className="contactimg" style={{ backgroundImage : "url('https://i.pinimg.com/600x315/80/63/35/8063359effd01b990e653bb32a83485d.jpg')",backgroundSize:"200px 170px" } }/>
                                            </Card.Header>
                                            <Card.Body>
                                              <Card.Title><h5>Name : {peeps.name}</h5>  </Card.Title>
                                                <Card.Text>
                                                    <h6>Post: {peeps.post}</h6>
                                                </Card.Text>
                                             </Card.Body>
                                        </Card>
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