import { React, useContext, useEffect, useState } from "react";
import Store from "../Store/Store";
import axios from "axios";
import Keys from "../config.keys";
import "./UserProfilePage.css";
import { UserEventCard } from "./UserEventCard";
import LoginButton from "../Components/LoginButton";
const UserProfilePage = () => {
  const [userData, setUserData] = useContext(Store);
  const [userEvents, setUserEvents] = useState(null);
  useEffect(() => {
    const getUserDetails = async () => {
      console.log(userData);

      try {
        const url = Keys.BASE_API + "/user/event";
        var res = await axios.get(url, {
          headers: {
            authorization: userData.token,
          },
        });

        console.log(res);
        setUserEvents([...res.data.data.events]);
      } catch (e) {
        console.log(e);
      }
    };
    getUserDetails();
  }, []);
  return (
    <div>
      {!userData.isAuth ? (
        <div className="center">
          {" "}
          <div>Fetching data..</div>
        </div>
      ) : (
        <div>
          <main className="profile">
            <div className="profile-bg"></div>
            <section className="container">
              <aside
                className="profile-image"
                style={{
                  backgroundImage: `url(https://scontent.fluh1-1.fna.fbcdn.net/v/t1.0-9/s960x960/125764343_3822597857760431_3471134365620395172_o.jpg?_nc_cat=106&ccb=2&_nc_sid=85a577&_nc_ohc=ZWczDiueOh0AX-hxAoO&_nc_ht=scontent.fluh1-1.fna&tp=7&oh=b76f1543e31dc274f037ad2af6ef2a4c&oe=5FDBF09E)`,
                  backgroundSize:'contain',
                  backgroundRepeat:'no-repeat'
                }}
              ></aside>
              <section className="profile-info">
                <h1 className="first-name">
                  {userData.user.name.split(" ")[0]}
                </h1>
                <h1 className="second-name">
                  {userData.user.name.split(" ")[1]}
                </h1>
                <h2>Email</h2>
                <p>{userData.user.email}</p>
                {/* <h2>College</h2>
                <p>{userData.user.college}</p>
                <h2>Year</h2>
                <p>{userData.user.year}</p> */}
              </section>
            </section>
          </main>

          <h1
            style={{
              textAlign: "center",
            }}
          >
            Your Events
          </h1>
          <div className="user-events">
            {userEvents &&
              userEvents.map((e, i) => <UserEventCard key={i} data={e} />)}
          </div>
        </div>
      )}
    </div>
  );
};
export { UserProfilePage };
