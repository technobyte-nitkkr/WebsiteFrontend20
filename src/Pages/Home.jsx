import { React } from "react";
import { Link } from "react-router-dom";
import LoginButton from "../Components/LoginButton";
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
            <div>
              <Link to="/about">
                <div className="circle"></div>
              </Link>
            </div>
            <div>About</div>
          </div>
          <div className="m-item">
            <div>
              <Link to="/category">
                <div className="circle"></div>
              </Link>
            </div>
            <div>Category</div>
          </div>
          <div className="m-item">
            <Link to="/query">
              <div className="circle"></div>
            </Link>
            <div>Ask Query</div>
          </div>
          <div className="m-item">
            <Link to="/contact">
              <div className="circle"></div>
            </Link>
            <div>Contact</div>
          </div>
          <div className="m-item">
            <Link to="/lectures">
              <div className="circle"></div>
            </Link>
            <div>Guest Lectures</div>
          </div>
          <div className="m-item">
            <Link to="/devs">
              <div className="circle"></div>
            </Link>
            <div>Devs</div>
          </div>
        </div>
      </div>
      <Particle />
    </div>
  );
};

export { Home };
