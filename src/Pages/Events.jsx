import { React, useState, useEffect } from 'react';
import { format } from 'date-fns';
import axios from 'axios';
import './eventPage.css';
import Key from '../config.keys';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const Events = props => {
    const category = props.match.params.category;
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [currIndex, setIndex] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        window.scrollTo(0, 0);
        const getEvents = async () => {
            try {
                const res = await axios.get(
                    `${Key.BASE_API}/events/description?eventCategory=${category}`,
                );
                console.log(res.data.data);
                setData([...res.data.data.events]);
            } catch (error) {
                setError(error);
                console.log(error);
            }
        };
        getEvents();
    }, [category]);
    console.log(data);
    return (
        data.length == 0 ? <div className="event-column"></div> :
            <div className="event-wrapper">

                <header>
                    <h1>Category Name
               {width > 980 ? <span></span> : <span onClick={() => {
                            setIsVisible(!isVisible);
                        }} style={{ float: 'right' }}> ☰</span>
                        }  </h1>
                </header>
                <section className="event-columns">


                    {!isVisible ? <span></span> :
                        <div className="event-column">
                            {
                                data.map((item, index) =>
                                    <div key={index} onClick={() => setIndex(index)}>

                                        <h1>{item.eventName} </h1>
                                        <br />
                                    </div>
                                )}

                        </div>}


                    <div className="event-column">

                        <h2>{data[currIndex].eventName}</h2>
                        <p> {data[currIndex].description}</p>
                    </div>

                    <div className="event-column">
                        <h2 >
                            <i className="primary md fa fa-calendar" aria-hidden="true"
                                style={{ marginRight: '2rem', }}
                            ></i>

                            {format(new Date(data[currIndex].startTime), 'dd MMM, yyyy')}
                        </h2>
                        <br></br>
                        <h2 >
                            <i className="primary md fas fa-clock" aria-hidden="true"
                                style={{ marginRight: '2rem', }}
                            ></i>

                            {format(new Date(data[currIndex].startTime), 'hh:mm aa')} -
                            {format(new Date(data[currIndex].endTime), 'hh:mm aa')}
                        </h2>
                        <br />

                        <h2 >
                            <span
                                style={{ marginRight: '.4rem', }}
                            >Prize - </span>
                            1k
                        </h2>
                        <br />
                        <br />
                        <h2>Coordinators</h2>
                        <br></br>
                        {data[currIndex].coordinators.map((item, index) =>
                            <h2 key={index}>
                                <span
                                    style={{ marginRight: '.4rem', }}
                                >{item.coordinator_name} - </span>
                                {item.coordinator_number}
                            </h2>


                        )}

                        <br />
                        <div className='event-register-button'>REGISTER</div>
                    </div>

                </section>


            </div>

    )
}

export { Events };