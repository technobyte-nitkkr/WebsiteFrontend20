import { React, useState, useEffect} from 'react';
import axios from 'axios';
import Key from "../config.keys";
import {Row,Col,Container} from 'react-bootstrap';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import './guestlecture.css';

const GuestLecture = () => {
    const [items, setData] = useState([]);
    const [error, setError] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        const getEvents = async () => {
            try {
                const res = await axios.get( `${Key.BASE_API}/lectures`);
                setData([ ...res.data.data.lectures ]);
            } catch (error) {
                setError(true);
                console.log(error);
            }
        };
        getEvents();
    }, []);
    console.log(items);
    return (
    <div className="mainbox">
        <div className="mainguest">
            <h1 className="guestheading">GUEST LECTURES</h1>
        </div>
        <div>
        <Container>
        {
            items.map((item,index)=>(
                    <Row className="guestrow">
                        <Col xl={6} md={6} sm={12}>
                            <h2>{item.name}</h2>
                            <h5>Date: {item.date}</h5>
                            <h5>Time: {item.time}</h5>
                            <p>{item.desc}</p>
                        </Col>
                        <Col xl={6} md={6} sm={12}>
                            <img src={item.imageUrl} alt="img1" className="guestimg"/>
                        </Col>
                    </Row>
                )
             )
        }
        </Container>
        </div>
    </div>)
}

export {GuestLecture};