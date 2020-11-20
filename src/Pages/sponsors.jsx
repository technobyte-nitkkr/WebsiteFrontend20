import React, { useEffect, useState } from 'react';
import './sponsors.css';
import axios from 'axios';
import Keys from "../config.keys";
const Sponsors = () => {
  var arr = ['left', 'right', 'top','bottom'];
  var [sponsorList, setSponsorList] = useState([]);
  useEffect(() => {

    const getSponsors = async () => {
      try {
        var url = Keys.BASE_API + '/sponsors';
        console.log(url)
        var response = await axios.get(url);
        console.log(response.data.data.paisa);
        setSponsorList(response.data.data.paisa);
      }
      catch (error) {
        console.log(error);
      }
    };
    getSponsors();


  }, []);
  return (
    <div>
      <div className="sponsor-wrapper">

        <h2 className="sponsor-headline typography-sponsor-headline">Our Amazing&nbsp;Sponsors</h2>

      </div>
      <div className='sponsi-container'>

        {sponsorList.map((item) => {
          var s = arr[Math.floor(Math.random() * arr.length)];
          console.log(s);

         return item.sponsors.map((item1,index) => {
            return (
              <div key={index} className={`sponsi-card-${s}`}>
                <div className='sponsi-card-image'>
                  <img style={{
                    background:'contain'
                  }} src={item1.imageUrl} />
                </div>
                <div className='sponsi-card-text'>
                  <h2 ><a href={item1.targetUrl}>Visit</a></h2>
                  <br />

                  <p>{item.sponsorSection}</p>
                </div>
              </div>)
          })
        })}


      </div>
    </div>
  )
};
export { Sponsors };