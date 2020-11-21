import { React, useState, useEffect } from "react";
import axios from "axios";
import Key from "../config.keys";
import { Row, Col, Container,Card } from "react-bootstrap";



function Contact() {
        const [items, setData] = useState([]);
        const [error, setError] = useState(false);
        useEffect(() => {
          window.scrollTo(0, 0);
          const getEvents = async () => {
            try {
              const res = await axios.get(`${Key.BASE_API}/contacts`);
              setData([...res.data.data.contacts.reverse()]);
            } catch (error) {
              setError(true);
              console.log(error);
            }
          };
          getEvents();
        }, []);
        console.log(items);
        return (
          <div>
            <div className="mainguest" >
              <h1 className="guestheading">Team Altius</h1>
            </div>
            <div>
              <Container style={{display: "block",maxWidth:"96%"}}>
                {items.map((item, index) => (
                  <Row className="guestrow" style={{marginTop:"0"}}>
                    <Col xl={12} md={12} sm={12}>
                      <h1 className="guestname">{item.section}</h1>
                        <Container style={{display: "block",maxWidth:"98%"}}>
                            <Row>
                                {item.people.map((peeps,ind)=>(
                                    <Col xl={3} md={3} sm={6}>
                                        <Card bg={"dark"} text={"white"} className="category-card"  style={{width:"250px",height:"250px",marginBottom:"1rem"}}>
                                            <Card.Header>
                                               <img src={peeps.imageUrl} className="contactimg" onError={(e)=>{e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}} style={{ backgroundImage : "url('https://i.pinimg.com/600x315/80/63/35/8063359effd01b990e653bb32a83485d.jpg')",backgroundSize:"80px 100px" } }/>
                                            </Card.Header>
                                            <Card.Body>
                                              <Card.Title><h5>{peeps.name}</h5>  </Card.Title>
                                                <Card.Text>
                                                    <h6>{peeps.post}</h6>
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