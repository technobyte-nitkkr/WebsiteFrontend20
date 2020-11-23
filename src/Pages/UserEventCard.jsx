import React from "react";
import { format } from "date-fns";
import "./UserEventCard.css";
import Elist from '../evtImg';
const UserEventCard = ({ data }) => {

  function getImage() {
    var x;
    Elist.map((element, index) => {
      if (element.event == data.eventCategory) {
        x = element.img;
        return '';
      }
    });
    console.log(x);
    return x;
  }
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1>{data.eventName}</h1>
            <img
              src={getImage()}
              style={{
                width: "300px",
                height: "300px",
              }}
            />
          </div>
          <div  className="flip-card-back">
            <h1>{data.eventName}</h1>
            <p  style={{ backgroundColor: "white" }}>{format(new Date(data.startTime), "PPp")}</p>
              
          </div>
        </div>
      </div>
    </div>
  );
};
export { UserEventCard };
