import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <div className="v-center">
        <h1>Error:404</h1>
        <p>We are sorry but the page you are looking for does not exist.</p>
        <Link className="remove-link-styles" to="/">
          <p>Go home</p>{" "}
        </Link>
      </div>
    </div>
  );
};

export { ErrorPage };
