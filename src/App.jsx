import { useContext, useReducer } from "react";
import Store from "./Store/Store";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Reducer from "./Store/Reducer";
import {Home} from './Pages/Home';
import {About} from './Pages/About';
import {Contact} from './Pages/Contact';
import {Devs} from './Pages/Devs';
import {EventDescription} from './Pages/EventDescription';
import {HomeComponent} from './Components/HomeComponent';
import {Events} from './Pages/Events';
import {Queries} from './Pages/Queries';
import {Category} from './Pages/Category';
import { ErrorPage } from "./Pages/Errorpage";

function App() {
  const initialState = useContext(Store);
  const [state, dispatch] = useReducer(Reducer, initialState);

  let routes = (
    <Switch>
      <Route path='/' exact component={HomeComponent}/>
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
        path="/eventdetails/:category/:event" 
        exact
        component={EventDescription}
      />
      <Route path="*" component={ErrorPage}/>
    </Switch>

  );
  return (
    <Store.Provider value={[state, dispatch]}>
      <div className="App">
        <Router>
        {routes}
        </Router>
        


      </div>
    </Store.Provider>
  );
}

export default App;
