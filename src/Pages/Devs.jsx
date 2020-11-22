import { React, useState} from "react";
import img1 from "../videos/git.png";
import img2 from "../videos/linkedin.jpg";
import img3 from "../videos/instagram.png";
const Devs = () => {
    const [ circleData, setCircleData ] = useState({
        strokeDashoffset :0,
        backgroundImage: "img-10.jpg",
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
      <div id="main" style = {{backgroundImage: `url(/images/${circleData.backgroundImage})`, backgroundRepeat:"no-repeat",margin:"0",padding:"0"}}>
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
            <span className="span-dev" id="step1" onClick = {() => handleClick(1004, 'img-14.jpg', '-350px')}></span>
            <span className="span-dev" id="step2" onClick = {() => handleClick(753, 'img-13.jpg', '-800px')}></span>
            <span className="span-dev" id="step3" onClick = {() => handleClick(502, 'img-12.png', '-1250px')}></span>
            <span className="span-dev" id="step4" onClick = {() => handleClick(251, 'img-11.jpg', '-1700px')}></span>
            <span className="span-dev" id="step5" onClick = {() => handleClick(0, 'img-10.jpg', '100px')}></span>
            <span className="span-dev" id="step6" onClick = {() => handleClick(1500, 'img-15.jpg', '-2170px')}></span>
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
              <img className="user-img" src="https://avatars0.githubusercontent.com/u/33419668?s=400&u=1b145a27955d29ddffe512b53b2d71e388cd16b5&v=4" alt=""/>
              <h1>Pratham Agarwal</h1>
              <a href="https://github.com/prathamzx" target="_blank">
                <img className="social-images" src={img1}  alt=""/>
              </a>
              <a href="https://www.linkedin.com/in/pratham-agarwal/" target="_blank">
                <img className="social-images" src={img2} alt=""/>
              </a>
              <a href="https://www.instagram.com/_prathampurush_/" target="_blank">
                <img className="social-images" src={img3} />
              </a>
            </div>
            <div className="user">
              <img className="user-img" src="https://media-exp1.licdn.com/dms/image/C5603AQGyLr7Kg__oWg/profile-displayphoto-shrink_800_800/0?e=1611792000&v=beta&t=-WpdJS6smSB0IJWbeOssIxQHim0dpNqycSwIeq7UWus" alt=""/>
              <h1>Nipun Singla</h1>
              <a href="https://github.com/nipunsingla" target="_blank">
                <img className="social-images" src={img1}  alt=""/>
              </a>
              <a href="https://www.linkedin.com/in/nipun-singla-834946170/" target="_blank">
                <img className="social-images" src={img2} alt=""/>
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <img className="social-images" src={img3} />
              </a>
            </div>
            <div className="user">
              <img className="user-img" src="/images/person-5.jpg" alt=""/>
              <h1>Person</h1>
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
              <img className="user-img" src="https://avatars1.githubusercontent.com/u/44068102?s=460&u=5837ef36f0ca48a3dabaf54fc1b4057051fc8f3b&v=4" alt=""/>
              <h1>Saran</h1>
              <a href="https://github.com/saranonearth" target="_blank">
                <img className="social-images" src={img1}  alt=""/>
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <img className="social-images" src={img2} alt=""/>
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <img className="social-images" src={img3} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export {Devs};
