import { React, useContext, useEffect } from 'react';
import Store from '../Store/Store';
import axios from 'axios';
import Keys from '../config.keys';
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
                setUserData([...res.data.data]);
                console.log(res);
            }
            catch (e) {
                console.log(e);
            }
        };
        getUserDetails();
    },[]);
    return (
        <div>

            {
                userData.isAuth ? <div> Yepppe you are logined</div> : <div>You are not logined </div>
            }
            User Profile Page
        </div>
    )
};
export { UserProfilePage };