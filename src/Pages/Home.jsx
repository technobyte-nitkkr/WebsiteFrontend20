import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginButton from "../Components/LoginButton";
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
          <div>
            <div className="circle"></div>
          </div>
          <div>About</div>
        </div>
        <div className="m-item">
          <div>
            <div className="circle"></div>
          </div>
          <div>Category</div>
        </div>
        <div className="m-item">
          <div className="circle"></div>
          <div>Ask Query</div>
        </div>
        <div className="m-item">
          <div className="circle"></div>
          <div>Contact</div>
        </div>
        <div className="m-item">
          <div className="circle"></div>
          <div>Devs</div>
        </div>
        <div className="m-item">
          <div className="circle"></div>
          <div>Sponsors</div>
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