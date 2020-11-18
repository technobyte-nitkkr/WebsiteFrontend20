import React, { useContext } from "react";
import Store from "../Store/Store";
import LoginButton from "./LoginButton";
import { GoogleLogout } from "react-google-login";
import { withRouter } from "react-router-dom";
import Keys from "../config.keys";
import { LOGOUT } from "../Store/Types";
const TopBar = (props) => {
  const [{ isAuth, authLoading }, dispatch] = useContext(Store);
  const logout = () => {
    props.history.push("/");
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <>
      <div className="top-bar">
        <div className="top-title">
          <p className="t-title">Altius/2020</p>
        </div>

        <div className="flex-it">
          {isAuth ? (
            <div className="flex-it">
              <div className="mr-2">
                <i
                  onClick={() => props.history.push("/user")}
                  className="fa fa-user icon hover"
                  aria-hidden="true"
                ></i>
              </div>
              <div>
                <GoogleLogout
                  clientId={Keys.OAUTH_CLIENT_ID}
                  render={(renderProps) => (
                    <p
                      className="login-button"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      {"Logout"}
                    </p>
                  )}
                  onLogoutSuccess={logout}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            </div>
          ) : (
            <div>
              <LoginButton />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default withRouter(TopBar);
