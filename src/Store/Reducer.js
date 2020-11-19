import { LOGIN, LOGOUT, AUTH } from './Types'
import jwt from 'jsonwebtoken'
import Keys from '../config.keys';

const Reducer = (state, action) => {

    const { type, payload } = action;

    switch (type) {

        case LOGIN:
            const userData = jwt.verify(payload, Keys.JWT_SECRET);
            localStorage.setItem("ts20token", payload);
            return {
                ...state,
                isAuth: true,
                user: userData,
                token: payload
            }
        case LOGOUT:
            console.log("logged out")
            localStorage.removeItem('ts20token')
            return {
                ...state,
                isAuth: false,
                user: null,
                token: null
            }
        case AUTH:
            console.log("HETE")
            return {
                ...state,
                authLoading: false
            }

        default:
            return state;
    }
}


export default Reducer;