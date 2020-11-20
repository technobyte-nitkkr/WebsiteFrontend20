import { React, useState} from "react";
import img1 from "../videos/git.png";
import img2 from "../videos/linkedin.jpg";
import img3 from "../videos/instagram.png";
const Devs = () => {
    const [ circleData, setCircleData ] = useState({
        strokeDashoffset :0,
        backgroundImage:'img-1.jpg',
        userBox:'100px'
    });

    const handleClick = (offset, image, box) => {
        setCircleData({
          strokeDashoffset: offset,
          backgroundImage : image,
          userBox : box
        });
    };

    return (
      <div id="main" style = {{backgroundImage: `url(/images/${circleData.backgroundImage})`}}>
        <div className="circle-box">
          <svg height="402" width="402">
            <circle r="200" cx="201" cy="201" strokeWidth="1px" stroke="gray" fill="none" />
          </svg>
          <svg height="402" width="402">
            <circle r="200" cx="201" cy="201" strokeWidth="1px" stroke="#fff" fill="none" id="svgCircle"
                style = {{strokeDashoffset: circleData.strokeDashoffset}}
            />
          </svg>
          <div>
            <span className="span-dev" id="step1" onClick = {() => handleClick(1004, 'img-2.jpg', '-350px')}></span>
            <span className="span-dev" id="step2" onClick = {() => handleClick(753, 'img-3.jpg', '-800px')}></span>
            <span className="span-dev" id="step3" onClick = {() => handleClick(502, 'img-4.jpg', '-1250px')}></span>
            <span className="span-dev" id="step4" onClick = {() => handleClick(251, 'img-5.jpg', '-1700px')}></span>
            <span className="span-dev" id="step5" onClick = {() => handleClick(0, 'img-1.jpg', '100px')}></span>
          </div>
          <div className="user-box" id="userBox" style = {{top: circleData.userBox}}>
            <div className="user">
              <img className="user-img" src = '/images/person-1.jpg' alt=""/>
              <h1>Sourabh Singh</h1>
              <a href="https://github.com/sourabhsing3" target="_blank">
                <img className="social-images" src={img1}  alt=""/>
              </a>
              <a href="https://www.linkedin.com/in/sourabh-singh-a77547190/" target="_blank">
                <img className="social-images" src={img2} alt=""/>
              </a>
              <a href="https://www.instagram.com/_sourabhsingh/" target="_blank">
                <img className="social-images" src={img3} />
              </a>
            </div>
            <div className="user">
              <img className="user-img" src="/images/person-2.jpg" alt=""/>
              <h1>Anuj Mehta</h1>
              <a href="https://github.com/Anuj-0911" target="_blank">
                <img className="social-images" src={img1}  alt=""/>
              </a>
              <a href="https://www.linkedin.com/in/anuj-mehta-b35766191/" target="_blank">
                <img className="social-images" src={img2} alt=""/>
              </a>
              <a href="https://www.instagram.com/anuj__0911/" target="_blank">
                <img className="social-images" src={img3} />
              </a>
            </div>
            <div className="user">
              <img className="user-img" src="/images/person-3.jpg" alt=""/>
              <h1>Carl Perry</h1>
              <a href="https://github.com/sourabhsing3" target="_blank">
                <img className="social-images" src={img1}  alt=""/>
              </a>
              <a href="https://www.linkedin.com/in/sourabh-singh-a77547190/" target="_blank">
                <img className="social-images" src={img2} alt=""/>
              </a>
              <a href="https://www.instagram.com/_sourabhsingh/" target="_blank">
                <img className="social-images" src={img3} />
              </a>
            </div>
            <div className="user">
              <img className="user-img" src="/images/person-4.jpg" alt=""/>
              <h1>Carl Perry</h1>
              <a href="https://github.com/sourabhsing3" target="_blank">
                <img className="social-images" src={img1}  alt=""/>
              </a>
              <a href="https://www.linkedin.com/in/sourabh-singh-a77547190/" target="_blank">
                <img className="social-images" src={img2} alt=""/>
              </a>
              <a href="https://www.instagram.com/_sourabhsingh/" target="_blank">
                <img className="social-images" src={img3} />
              </a>
            </div>
            <div className="user">
              <img className="user-img" src="/images/person-5.jpg" alt=""/>
              <h1>Carl Perry</h1>
              <a href="https://github.com/sourabhsing3" target="_blank">
                <img className="social-images" src={img1}  alt=""/>
              </a>
              <a href="https://www.linkedin.com/in/sourabh-singh-a77547190/" target="_blank">
                <img className="social-images" src={img2} alt=""/>
              </a>
              <a href="https://www.instagram.com/_sourabhsingh/" target="_blank">
                <img className="social-images" src={img3} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export {Devs};
