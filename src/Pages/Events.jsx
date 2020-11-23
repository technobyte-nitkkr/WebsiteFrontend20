import { React, useState, useEffect, useContext } from "react";
import { format } from "date-fns";
import axios from "axios";
import "./eventPage.css";
import Key from "../config.keys";
import "react-dropdown/style.css";
import Store from "../Store/Store";
import Keys from "../config.keys";

const Events = (props) => {
  const category = props.match.params.category;
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [currIndex, setIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(true);
  const [state, _] = useContext(Store);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    window.scrollTo(0, 0);
    const getEvents = async () => {
      try {
        const res = await axios.get(
          `${Key.BASE_API}/events/description?eventCategory=${category}`
        );
        //  console.log(res.data.data);
        setData([...res.data.data.events]);
      } catch (error) {
        setError(error);

        console.log(error);
      }
    };
    getEvents();
  }, [category]);

  const register = async (event) => {
    if (!state.isAuth) {
      setMessage("Please login to register.");
    } else {
      const body = {
        eventName: event,
        eventCategory: category,
        email: state.user.email,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: state.token,
        },
      };

      try {
        setMessage("Registering. Please wait.");
        const res = await axios.put(
          `${Keys.BASE_API}/user/event`,
          body,
          config
        );
        console.log(res);
        if (res.data.success) {
          setMessage(res.data.status);
        } else {
          setMessage(res.data.message);
        }

        setTimeout(() => {
          setMessage(null);
        }, 2000);
      } catch (error) {
        setMessage("Error occured. Try refreshing");
        console.log(error);
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      }
    }
  };
  return data.length == 0 ? (
    <div></div>
  ) : (
    <div style={{ backgroundColour: "black",marginBottom:'3rem' }} className="event-wrapper">
      <header>
        <h1 className="category-title">
          {data[0].eventCategory}
          {width > 980 ? (
            <span></span>
          ) : (
            <span
              onClick={() => {
                setIsVisible(!isVisible);
              }}
              style={{ float: "right" }}
            >
              {isVisible ? (
                <i className="fa fa-times" aria-hidden="true"></i>
              ) : (
                <span>☰</span>
              )}
            </span>
          )}{" "}
        </h1>
      </header>
      <section className="event-columns">
        {isVisible || width > 980 ? (
          <div
            className="event-column"
            style={{ overflowY: "scroll", height: "100vh" }}
          >
            {data.map((item, index) => (
              <div
                style={{ fontSize: "0.9em" }}
                key={index}
                onClick={() => {
                  setIndex(index);
                  if (width <= 980) {
                    setIsVisible(false);
                  }
                }}
              >
                <h2>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                  {item.eventName}{" "}
                </h2>
                <br />
              </div>
            ))}
          </div>
        ) : (
          <span></span>
        )}

        <div className="event-column">
          <h2>{data[currIndex].eventName}</h2>
          <p
            style={{
              fontSize: "1.1rem",
            }}
          >
            {" "}
            {data[currIndex].description}
          </p>
          <br />
          <p className="md">
            <i
              className="primary md fa fa-calendar e-icon"
              aria-hidden="true"
              style={{ marginRight: "2rem" }}
            ></i>

            {format(new Date(data[currIndex].startTime), "dd MMM, yyyy")}
          </p>
          <br></br>
          <p className="md">
            <i
              className="primary md fas fa-clock e-icon"
              aria-hidden="true"
              style={{ marginRight: "2rem" }}
            ></i>
            {format(new Date(data[currIndex].startTime), "hh:mm aa")} -
            {format(new Date(data[currIndex].endTime), "hh:mm aa")}
          </p>
          <br />

          {/* <h2>
            <span style={{ marginRight: ".4rem" }}>Prize - </span>
            1k
          </h2> */}
          <br />
          <br />
          <h2>Coordinators</h2>
          <br></br>
          {data[currIndex].coordinators.map((item, index) => (
            <p className="md" key={index}>
              <span style={{ marginRight: ".4rem" }}>
                {item.coordinator_name} -{" "}
              </span>
              {item.coordinator_number}
            </p>
          ))}

          <br />
          <center>{message && <p>{message}</p>}</center>
          <div
            onClick={() => register(data[currIndex].eventName)}
            className="event-register-button"
          >
            REGISTER
          </div>
        </div>
      </section>
    </div>
  );
};

export { Events };
