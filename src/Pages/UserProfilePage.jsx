import { React, useContext, useEffect, useState } from 'react';
import Store from '../Store/Store';
import axios from 'axios';
import Keys from '../config.keys';
import './UserProfilePage.css';
import { UserEventCard } from './UserEventCard';
import LoginButton from '../Components/LoginButton';
const UserProfilePage = () => {

    const [userData, setUserData] = useContext(Store);
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


            }
            catch (e) {
                console.log(e);
            }
        };
        getUserDetails();
    }, []);
    return (
        <div>

            {!(userData.isAuth) ? <div style={{
                display: 'flex',
                alignItems: 'center',

                justifyContent: 'center',
                alignSelf:'center',
            }}>
                <LoginButton /></div> :
                <div>
                    <main className="profile">
                        <div className="profile-bg"></div>
                        <section className="container">
                            <aside className="profile-image" style={{
                                backgroundImage: `url(${userData.user.picture})`
                            }}>
                            </aside>
                            <section className="profile-info">
                                <h1 className="first-name">{userData.user.name.split(" ")[0]}</h1>
                                <h1 className="second-name">
                                    {userData.user.name.split(" ")[1]}
                                </h1>
                                <h2>Email</h2>
                                <p>
                                    {userData.user.email}
                                </p>
                                <h2>College</h2>
                                <p>
                                    {userData.user.college}
                                </p><h2>Year</h2>
                                <p>
                                    {userData.user.year}
                                </p>

                            </section>
                        </section>
                    </main>

                    <h1 style={{
                        textAlign: 'center',
                    }}>
                        Your Events
    </h1>
                    <div className='user-events'>

                        <UserEventCard />

                        <UserEventCard />
                        <UserEventCard />
                        <UserEventCard />

                        <UserEventCard />
                    </div>

                </div>
            }
        </div>
    )
};
export { UserProfilePage };