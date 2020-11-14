import { React, useEffect} from "react";
import { Link } from 'react-router-dom';
import LoginButton from "../Components/LoginButton";
import axios from 'axios';
import Key from '../config.keys';
const Home = () => {
  useEffect(()=>{
    const getEventTimelines = async () => {
      try {
          const res = await axios.get( `${Key.BASE_API}/events/timeline`);
          console.log(res)
      } catch (error) {
          console.log(error);
      }
  };
  getEventTimelines();
  },[]);
  return (
    <div>
      <div>

    
        <Link to='/user'>

          <div className="bar">
            <i className="primary md fa fa-user" aria-hidden="true"></i>
         
          </div>
        </Link>
      </div>
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
          <div>Devs</div>
        </div>
      </div>
    </div>
  );
};

export { Home };
