import { createContext } from "react";

const Store = createContext({
    user: null,
    isAuth: false
})

export default Store