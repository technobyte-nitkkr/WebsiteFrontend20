import { useContext, useReducer } from "react";
import Store from "./Store/Store";
import LoginButton from "./Components/LoginButton";
import Reducer from "./Store/Reducer";
import {Home} from './Pages/Home';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  const initialState = useContext(Store);
  const [state, dispatch] = useReducer(Reducer, initialState);

  let routes = (
    <Switch>
      
      <Route
        path="/home"
        exact
        component={Home}
      />

    
<Redirect to="/"/>
      
    </Switch>

  );
  return (
    <Store.Provider value={[state, dispatch]}>
      <div className="App">
        
        <h1>bruh workin.</h1>
        <LoginButton />   
        <Router>

        {routes}
        </Router>     
      </div>
    </Store.Provider>
  );
}

export default App;
