import { React } from "react";
import { Link } from "react-router-dom";
import { Particle } from "../Components/particle";

const Home = () => {

  return (
    <div>
      <div className="particle-style">
        <div className="center">
          <h1 className="main-title Altius">ALTIUS</h1>
        </div>
        <div className="menu">
          <div className="m-item">
            <Link to='/about'><div className="circle" /></Link>
            <div>About</div>
          </div>
          <div className="m-item">
            <Link to='/categories'><div className="circle" /></Link>
            <div>Category</div>
          </div>
          <div className="m-item">
            <Link to='/query'><div className="circle" /></Link>
            <div>Ask Query</div>
          </div>
          <div className="m-item">
            <Link to='/contact'><div className="circle" /></Link>
            <div>Contact</div>
          </div>
          <div className="m-item">
            <Link to='/lectures'><div className="circle" /></Link>
            <div>Guest Lectures</div>
          </div>
          <div className="m-item">
            <Link to='/sponsers'><div className="circle" /></Link>
            <div>Sponsers</div>
          </div>
          <div className="m-item">
            <Link to='/devs'><div className="circle" /></Link>
            <div>Devs</div>
          </div>
        </div>
      </div>
      <Particle/>
    </div>
  );
};

export { Home };