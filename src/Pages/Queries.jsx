import { React, useState, useContext } from "react";
import axios from "axios";
import Keys from "../config.keys";
import Store from "../Store/Store";

const Queries = () => {
  const [state, dispatch] = useContext(Store);
  const [formData, setFormData] = useState({
    email: "",
    text: "",
  });
  const [feedback, setFeedback] = useState({
    feedback: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFeedback = (msg) => {
    setFeedback({
      feedback: msg,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send(formData);
    setFormData({
      email: "",
      text: "",
    });
  };

  const send = async (formData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: state.token,
        },
      };
      const body = JSON.stringify(formData);
      await axios.post(`${Keys.BASE_API}/query`, body, config);
      dispatch({
        type: "ADD_ERROR",
        payload: { msg: "query added." },
      });
      handleFeedback("Query submitted");
      setTimeout(() => {
        dispatch({
          type: "REMOVE_ERRORS",
        });
        handleFeedback("");
      }, 2000);
    } catch (error) {
      dispatch({
        type: "ADD_ERROR",
        payload: { msg: "Something went wrong." },
      });
      handleFeedback("Something went wrong, Try Again.");
      setTimeout(() => {
        dispatch({
          type: "REMOVE_ERRORS",
        });
        handleFeedback("");
      }, 2000);
    }
  };

  return (
    <div>
      <div></div>
      <center>
        <h3 className="guestheading">Ask your Query</h3>
      </center>
      <div className="query-feedback-box">{feedback.feedback}</div>
      <div className="form-container">
        <form onSubmit={handleSubmit} method="POST">
          <div className="form-ele">
            <input
              name="email"
              required="required"
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="form-ele">
            <textarea
              name="text"
              required="required"
              type="text"
              rows="7"
              cols="60"
              placeholder="Write your query..."
              onChange={handleChange}
            />
          </div>
          <div className="query-send">
            <button type="submit" className="query-send-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Queries };
