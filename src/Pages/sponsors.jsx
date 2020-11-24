import React, { useEffect, useState } from "react";
import "./sponsors.css";
import axios from "axios";
import Keys from "../config.keys";
import { is } from "date-fns/esm/locale";
import SponsorList from '../sponsorJsonData.js';
const Sponsors = () => {
  var arr = ["left", "right", "top", "bottom"];
  var isInWait = false;
  var [sponsorList, setSponsorList] = useState([]);
  useEffect(() => {
    console.log(SponsorList);
    const getSponsors = async () => {
      try {
        var url = Keys.BASE_API + "/sponsors";

        var response = await axios.get(url);
        console.log(response.data.data.paisa);

        setSponsorList(response.data.data.paisa);
      } catch (error) {
        console.log(error);
      }
    };
    getSponsors();
  }, []);
  return (
    <div style={{ marginBottom: '6rem' }}>

      <div className="sponsor-wrapper">
        <h2 className="sponsor-headline typography-sponsor-headline">
          Our Amazing&nbsp;Sponsors
        </h2>
      </div>
      <div className="sponsi-container">
        {SponsorList.map((item,index) => {
          console.log(item.imageUrl);

          var s = arr[Math.floor(Math.random() * arr.length)];
           

            return (
              <div key={index} className={`sponsi-card-${s}`}>
                <div className="sponsi-card-image">
                  <img
                    style={{
                      objectFit: "contain",
                    }}
                    src={item.imageUrl}
                  />
                </div>
                <div className="sponsi-card-text">
                  <h2>
                    <a href={item.targetUrl} style={{
                      color:'#0EF37F'
                    }}>{item.name}</a>
                  </h2>
                  <br />

                </div>
                </div>

            );

        })}
      </div>
    </div> 
  );
};
export { Sponsors };
