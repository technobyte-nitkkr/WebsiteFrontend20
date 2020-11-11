import { useContext, useReducer } from "react";
import Store from "./Store/Store";
import Reducer from "./Store/Reducer";

import LoginButton from "./Components/LoginButton";

function App() {
  const initialState = useContext(Store);
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Store.Provider value={[state, dispatch]}>
      <div className="App">
        <h1>bruh workin.</h1>
        <LoginButton />

        <p>{state.user && state.user.name ? state.user.name : null}</p>
      </div>
    </Store.Provider>
  );
}

export default App;
