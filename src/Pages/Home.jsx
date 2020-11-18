import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import LoginButton from "../Components/LoginButton";

const Home = () => {

  const handleClick = (info) => {
      window.location.href = `/${info}`;
  };

  return (
    <div>
      <div className="center">
        <h1 className="main-title Altius">ALTIUS</h1>
      </div>
      <div className="menu">
        <div className="m-item">
          <div 
              className="circle"
              onClick = {() => handleClick('about')}
          />
          <div>About</div>
        </div>
        <div className="m-item">
          <div 
              className="circle"
              onClick = {() => handleClick('categories')}
          />
          <div>Category</div>
        </div>
        <div className="m-item">
          <div 
              className="circle"
              onClick = {() => handleClick('query')}
          />
          <div>Ask Query</div>
        </div>
        <div className="m-item">
          <div 
              className="circle"
              onClick = {() => handleClick('contact')}
          />
          <div>Contact</div>
        </div>
        <div className="m-item">
          <div 
              className="circle"
              onClick = {() => handleClick('lectures')}
          />
          <div>Guest Lectures</div>
        </div>
        <div className="m-item">
          <div 
              className="circle"
              onClick = {() => handleClick('sponsers')}
          />
          <div>Sponsers</div>
        </div>
        <div className="m-item">
          <div 
              className="circle"
              onClick = {() => handleClick('devs')}
          />
          <div>Devs</div>
        </div>
      </div>
    </div>
  );
};

export { Home };
