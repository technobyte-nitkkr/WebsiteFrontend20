import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Particle } from "../Components/particle";
import TimelineHome from '../Pages/TimelineHome';
const Home = () => {
  const [width,setWidth]=useState(window.innerWidth);
  const [height,setHeight]=useState(window.innerHeight);
  useEffect(()=>{
    window.addEventListener("resize", () =>{


     setWidth(window.innerWidth);
     setHeight(window.innerHeight);
     
    });
     },[])
  return (
    <div>
      <div className="particle-style">
        <div className="center">
          <h1 className="main-title Altius">ALTIUS</h1>
        </div>
        <div className="menu">
          <div className="m-item">
            <Link to="/about">
              <div className="circle" />
            </Link>
            <div>About</div>
          </div>
          <div className="m-item">
            <Link to="/categories">
              <div className="circle" />
            </Link>
            <div>Category</div>
          </div>
          <div className="m-item">
            <Link to="/contact">
              <div className="circle" />
            </Link>
            <div>Contact</div>
          </div>
          <div className="m-item">
            <Link to="/lectures">
              <div className="circle" />
            </Link>
            <div>Guest Lectures</div>
          </div>
          <div className="m-item">
            <Link to="/sponsors">
              <div className="circle" />
            </Link>
            <div>Sponsors</div>
          </div>
          <div className="m-item">
            <Link to="/testimonial">
              <div className="circle" />
            </Link>
            <div>Testimonials</div>
          </div>
          <div className="m-item">
            <Link to="/devs">
              <div className="circle" />
            </Link>
            <div>Devs</div>
          </div>
        </div>
      </div>


<div style={{overflowX:'scroll',
scrollbarWidth: 'none'
}}>
 {width>=820 && height<=809?<span></span>:<TimelineHome/>} 

  
  </div>
      <Particle/>

    </div>
  );
};

export { Home };
