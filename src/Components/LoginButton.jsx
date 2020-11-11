import React, { useState, useContext } from "react";
import { GoogleLogin } from "react-google-login";
import useFetch from "use-http";

import Keys from "../config.keys";
import Store from "../Store/Store";
import { LOGIN } from "../Store/Types";

const LoginButton = () => {
  const [dispatch] = useContext(Store);
  const request = useFetch(Keys.BASE_API);
  const [localState, setLocalState] = useState({
    error: "",
  });

  const success = async (e) => {
    const TOKEN = e.tokenId;

    const response = await request.post("/login", {
      idToken: TOKEN,
    });

    console.table(response);
    console.log(dispatch);
  };

  const failed = (e) => {
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
