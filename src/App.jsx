import { useContext, useReducer } from "react";
import Store from "./Store/Store";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import LoginButton from "./Components/LoginButton";
import Reducer from "./Store/Reducer";
import {Home} from './Pages/Home';
import {About} from './Pages/About';
import {Contact} from './Pages/Contact';
import {Devs} from './Pages/Devs';
import {EventDescription} from './Pages/EventDescription';
import {Events} from './Pages/Events';
import {Queries} from './Pages/Queries';
import {Category} from './Pages/Category';

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

<Route
        path="/about"
        exact
        component={About}
      />

<Route
        path="/contact"
        exact
        component={Contact}
      />

<Route
        path="/query"
        exact
        component={Queries}
      />

<Route
        path="/devs"
        exact
        component={Devs}
      />

<Route
        path="/categories"
        exact
        component={Category}
      />

<Route
        path="/events"
        exact
        component={Events}
      />

<Route
        path="/eventdetails"
        exact
        component={EventDescription}
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
