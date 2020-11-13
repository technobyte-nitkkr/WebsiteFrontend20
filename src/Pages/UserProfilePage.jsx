import { React, useContext, useEffect } from 'react';
import Store from '../Store/Store';
import axios from 'axios';
import Keys from '../config.keys';
import './UserProfilePage.css';
const UserProfilePage = () => {

    const [userData, setUserData] = useContext(Store);
    const isAuth = false;
    useEffect(() => {
        const getUserDetails = async () => {
            console.log(userData);
            try {
                const url = Keys.BASE_API + '/user/event';
                var res = await axios.get(url, {
                    headers: {
                        'authorization': userData.token,

                    }
                });
                await setUserData([...res.data.data]);
                console.log(userData);
            }
            catch (e) {
                console.log(e);
            }
        };
        getUserDetails();
    }, []);
    return (
        <div>

            <main className="user-profile">
                <div className="profile-bg"></div>
                <section className="user-profile-container">
                    <aside className="profile-image
                    ">
                    </aside>
                    <section className="profile-info">
                        <h1 className="first-name">Nipun</h1>
                        <h1 className="second-name">Gupta</h1>



                        <h2>Email</h2>
                        <p>
                            nipun_11813045@nitkkr.ac.in
      </p>
                        <h2>College</h2>
                        <p>Nit Kurukshetra
      </p>
                        <h2>
                            Year

      </h2>
      <p>2nd</p>

                </section>
                </section>
                <div>
                    <h1>
                        Your Events
                    </h1>
                    
                </div>
            </main>

        </div >
    )
};
export { UserProfilePage };