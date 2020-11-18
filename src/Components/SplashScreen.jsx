import React from "react";
import { useSpring, animated , config} from 'react-spring';
import logo from './altius_logo.png';

function SplashScreen() {

  const props = useSpring({to : {opacity: 1}, from: {opacity: 0},config: {duration:1800}})
  return (
  <div className="splashscr">
    <animated.div style={props}>
        <img src={logo} alt="" className="splashlogo"/>
    </animated.div>
  </div>
  
  );
};

export default SplashScreen;
