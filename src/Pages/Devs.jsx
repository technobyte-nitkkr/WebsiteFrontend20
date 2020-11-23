import { React, useEffect, useState } from "react";
import img1 from "../videos/git.png";
import img2 from "../videos/linkedin.jpg";
import img3 from "../videos/instagram.png";
const Devs = () => {
  const [circleData, setCircleData] = useState({
    strokeDashoffset: 0,
    backgroundImage: "img-10.jpg",
    userBox: '100px'
  });
  var userArr = [[0, 'img-17.jpg', '100px', 5], [1004, 'img-14.jpg', '-350px', 1], [753, 'img-13.jpg', '-800px', 2], [502, 'img-15.jpg', '-1250px', 3], [251, 'img-11.jpg', '-1700px', 4], [1500, 'img-12.png', '-2170px', 0], [1, 'img-10.jpg', '-2600px', 5], [2, 'img-19.jpg', '-3050px', 5], [3, 'img-18.jpg', '-3500px', 5]];

  var slideIndex = 0;
  console.log(slideIndex)
  const handleClick = (offset, image, box, index) => {
    setCircleData({
      strokeDashoffset: offset,
      backgroundImage: image,
      userBox: box,

    });

  };

  useEffect(() => {


    showSlides();


    function showSlides() {
      var i;
      // var slides = document.getElementsByClassName("mySlides");
      // var dots = document.getElementsByClassName("dot");
      // for (i = 0; i < slides.length; i++) {
      //   slides[i].style.display = "none";  
      // }
      console.log(userArr[slideIndex]);
      console.log(slideIndex)
      handleClick(userArr[slideIndex][0], userArr[slideIndex][1], userArr[slideIndex][2], userArr[slideIndex][3]);

      slideIndex++;
      if (slideIndex >= userArr.length) { slideIndex = 0 }
      // for (i = 0; i < dots.length; i++) {
      //   dots[i].className = dots[i].className.replace(" active", "");
      // }
      // slides[slideIndex-1].style.display = "block";  
      // dots[slideIndex-1].className += " active";

      setTimeout(() => {
        showSlides()
      }, 3000); // Change image every 3 seconds

    }
  }, [slideIndex])

  return (
    <div id="main" style={{ backgroundImage: `url(/images/${circleData.backgroundImage})`, backgroundRepeat: "no-repeat", margin: "0", padding: "0" }}>
      <div className="circle-box">
        <svg height="402" width="402">
          <circle r="200" cx="201" cy="201" strokeWidth="1px" stroke="gray" fill="none" />
        </svg>

        <div>
          <span className="span-dev" id="step1" ></span>
          <span className="span-dev" id="step2" ></span>
          <span className="span-dev" id="step3" ></span>
          <span className="span-dev" id="step4" ></span>
          <span className="span-dev" id="step5" ></span>
          <span className="span-dev" id="step6" ></span>

        </div>
        <div className="user-box" id="userBox" style={{ top: circleData.userBox }}>
          <div className="user">
            <img className="user-img" src="/images/person-2.jpg" alt="" />
            <h1>Anuj Mehta</h1>
            <a href="https://github.com/Anuj-0911" target="_blank">
              <img className="social-images" src={img1} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/anuj-mehta-b35766191/" target="_blank">
              <img className="social-images" src={img2} alt="" />
            </a>
            <a href="https://www.instagram.com/anuj__0911/" target="_blank">
              <img className="social-images" src={img3} />
            </a>
          </div>
          <div className="user">
            <img className="user-img" src="/images/Lokesh.jpg" alt="" />
            <h1>Lokesh Goel</h1>
            <a href="https://github.com/thelokeshgoel00" target="_blank">
              <img className="social-images" src={img1} alt="" />
            </a>
            <a href="https://bit.ly/LokeshLinkedIn" target="_blank">
              <img className="social-images" src={img2} alt="" />
            </a>
            <a href="https://www.instagram.com/insanenerd2507" target="_blank">
              <img className="social-images" src={img3} />
            </a>
          </div>
          <div className="user">
            <img className="user-img" src="https://media-exp1.licdn.com/dms/image/C5603AQGyLr7Kg__oWg/profile-displayphoto-shrink_800_800/0?e=1611792000&v=beta&t=-WpdJS6smSB0IJWbeOssIxQHim0dpNqycSwIeq7UWus" alt="" />
            <h1>Nipun Singla</h1>
            <a href="https://github.com/nipunsingla" target="_blank">
              <img className="social-images" src={img1} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/nipun-singla-834946170/" target="_blank">
              <img className="social-images" src={img2} alt="" />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img className="social-images" src={img3} />
            </a>
          </div>
          <div className="user">
            <img className="user-img" src="https://avatars1.githubusercontent.com/u/44068102?s=460&u=5837ef36f0ca48a3dabaf54fc1b4057051fc8f3b&v=4" alt="" />
            <h1>Saran</h1>
            <a href="https://github.com/saranonearth" target="_blank">
              <img className="social-images" src={img1} alt="" />
            </a>
            {/* <a href="https://www.linkedin.com" target="_blank">
              <img className="social-images" src={img2} alt="" />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img className="social-images" src={img3} />
            </a> */}
          </div>
          <div className="user">
            <img className="user-img" src='/images/person-1.jpg' alt="" />
            <h1>Sourabh Singh</h1>
            <a href="https://github.com/sourabhsing3" target="_blank">
              <img className="social-images" src={img1} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/sourabh-singh-a77547190/" target="_blank">
              <img className="social-images" src={img2} alt="" />
            </a>
            <a href="https://www.instagram.com/_sourabhsingh/" target="_blank">
              <img className="social-images" src={img3} />
            </a>
          </div>

          <div className="user">
            <img className="user-img" src="https://avatars0.githubusercontent.com/u/33419668?s=400&u=1b145a27955d29ddffe512b53b2d71e388cd16b5&v=4" alt="" />
            <h1>Pratham Agarwal</h1>
            <a href="https://github.com/prathamzx" target="_blank">
              <img className="social-images" src={img1} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/pratham-agarwal/" target="_blank">
              <img className="social-images" src={img2} alt="" />
            </a>
            <a href="https://www.instagram.com/_prathampurush_/" target="_blank">
              <img className="social-images" src={img3} />
            </a>
          </div>

          <div className="user">
            <img className="user-img" src="/images/Vasu.jpeg" alt="" />
            <h1>Vasu Agarwal</h1>
            <a href="https://github.com/vasu2907" target="_blank">
              <img className="social-images" src={img1} alt="" />
            </a>
            <a href=" https://www.linkedin.com/in/vasu-agrawal-64153b170/" target="_blank">
              <img className="social-images" src={img2} alt="" />
            </a>
            <a href="https://www.instagram.com/_vasu2907/" target="_blank">
              <img className="social-images" src={img3} />
            </a>
          </div>
          <div className="user">
            <img className="user-img" src="/images/Shruti.jpg" alt="" />
            <h1>Shruti Garg</h1>
            <a href="https://github.com/shruti-g" target="_blank">
              <img className="social-images" src={img1} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/shruti-garg-4a2599171/" target="_blank">
              <img className="social-images" src={img2} alt="" />
            </a>
            <a href="https://www.instagram.com/shruti.garg23/" target="_blank">
              <img className="social-images" src={img3} />
            </a>
          </div>
          <div className="user">
            <img className="user-img" src="/images/Vaibhav.jpeg" alt="" />
            <h1>Vaibhav Dua</h1>
            <a href="https://github.com/vxd447" target="_blank">
              <img className="social-images" src={img1} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-dua-090730191/" target="_blank">
              <img className="social-images" src={img2} alt="" />
            </a>
            <a href="https://www.instagram.com/vxd447/" target="_blank">
              <img className="social-images" src={img3} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Devs };
