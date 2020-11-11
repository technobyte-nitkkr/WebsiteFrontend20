import { LOGIN } from './Types'
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

        default:
            return state;
    }
}


export default Reducer;