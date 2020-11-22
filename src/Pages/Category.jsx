import { React, useState, useEffect } from "react";
import axios from "axios";
import Key from "../config.keys";
import Elist from "../evtImg.js";
import { Link } from "react-router-dom";
const Category = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const getEvents = async () => {
      try {
        const res = await axios.get(`${Key.BASE_API}/events/categories`);
        setData({ ...res.data.data });
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    getEvents();
  }, []);
  function getImage(eventName) {
    var x;
    Elist.map((element, index) => {
      if (element.event == eventName) {
        x = element.img;
        return false;
      }
    });
    return x;
  }
  console.log(data.categories);
  var categoriesString = [];

  if (data.categories == undefined)
    data.categories = [
      "Astronomy",
      "Design",
      "Informals",
      "Managerial",
      "Online-Events",
      "Papyrus-Vitae",
      "Programming",
      "Quizzes",
      "Robotics",
    ];
  console.log(categoriesString);
  data.categories.map((cat) => console.log(cat));

  return (
    <div>
      <div className="center">
        <h1 className="category-main-title">CATEGORIES</h1>
      </div>

      <br></br>
      <div class="category-container">
        {data.categories.map((cat) => (
          <div className="category-card">
            <Link to={`events/${cat}`}>
              <h3 className="category-subtitle">{cat}</h3>
              <div className="category-bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
              </div>
              <div className="category-circle"></div>
              <div>
                <img className="category-image" src={getImage(cat)}></img>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Category };
