import React, { useState, useContext } from "react";
import { GoogleLogin } from "react-google-login";
import useFetch from "use-http";

import Keys from "../config.keys";
import Store from "../Store/Store";
import { AUTH, LOGIN } from "../Store/Types";

const LoginButton = () => {
  const [_, dispatch] = useContext(Store);
  const request = useFetch(Keys.BASE_API);
  const [localState, setLocalState] = useState({
    error: "",
  });

  const success = async (e) => {
    const TOKEN = e.tokenId;
    try {
      const response = await request.post("/login", {
        idToken: TOKEN,
      });

      console.log("HERE");

      dispatch({
        type: LOGIN,
        payload: response.data.token,
      });

      dispatch({
        type: AUTH,
      });
    } catch (error) {
      console.info("ERROR AUTH FETCH", error);
    }
  };

  const failed = (e) => {
    console.info("Auth on Failure", e);
    setLocalState({
      ...localState,
      error: "Error. Try again.",
    });

    setTimeout(() => {
      setLocalState({
        ...localState,
        error: "",
      });
    }, 2000);
  };

  return (
    <div>
      {localState.error ? (
        <p>{localState.error}</p>
      ) : (
        <GoogleLogin
          render={(renderProps) => (
            <button
              className="login-button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Login
            </button>
          )}
          clientId={Keys.OAUTH_CLIENT_ID}
          buttonText="Login"
          onSuccess={success}
          onFailure={failed}
          isSignedIn={true}
        />
      )}
    </div>
  );
};

export default LoginButton;
