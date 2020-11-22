import React, { useEffect, useContext, useState } from 'react';
import Store from '../Store/Store';
import axios from 'axios';
import Elist from '../evtImg.js';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import dateFormat from 'dateformat';
import HorizontalTimeline from 'react-horizontal-timeline';
import './timelineHome.css';
const TimelineHome = () => {
  const { state, dispatch } = useContext(Store);
  const [istate, setState] = useState({
    timeline: []
  });
  useEffect(() => {
    const getTimeline = async () => {
      try {
        const res = await axios.get(
          'https://us-central1-techspardha-87928.cloudfunctions.net/api/events/timeline'
        );
        setState({
          ...istate,
          timeline: res.data.data.events
        });
      } catch (error) {
        console.log(error);
      }
    };
    getTimeline();
  }, []);
  function getImage(eventName) {
    var x;
    Elist.map((element, index) => {
      if (element.event == eventName) {
        x = element.img;
        return false;
      }
    });
    return x;
  }
  function time(timestamp) {
    var myDate = new Date(timestamp);
    var x = dateFormat(myDate, 'hh:MM TT');
    return x;
  }
  function date(timestamp) {
    var myDate = new Date(timestamp);
    var x = dateFormat(myDate, "dd/mm/yy");
    return x;
  }
  istate.timeline.sort((x, y) => {
    var a = new Date(x.startTime);
    var b = new Date(y.startTime);
    return a - b;
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  var now = new Date();
  var timenow = now.getTime();


  return <div className="timeline-wrapper">
    <ul
      

      className="timeline" id="timeline">
      {
        istate.timeline ? (
          istate.timeline.map((event, index) => {
            if (event.startTime >= timenow - 60 * 60 * 1000) {

              return (

                <li key={index} style={{
                  display:
                    'inline-block'
                }} className="li complete">
                  <div className="timestamp">
                    <span className="author" >
                      <img 
                     className='timeline-image'
                     style={{
                       width:70,
                       height:60,
                       
                     }}
                      src={getImage(event.eventCategory)}></img>
                      {event.eventName.split(" ")[0]}</span>
                    <span className="date" style={{marginBottom:'1rem'}}>
                      {date(event.startTime)}

                    </span>

                  </div>
                  <div className="status">
                    <h6>                   {time(event.startTime)} - {time(event.endTime)}

                    </h6>
                  </div>
                </li>);
            }

          })) : <p></p>
      }
    </ul>


  </div>;
};

export default TimelineHome;