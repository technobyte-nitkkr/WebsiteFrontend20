import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import useFetch from "use-http";

import Keys from "../config.keys";

const LoginButton = () => {
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
