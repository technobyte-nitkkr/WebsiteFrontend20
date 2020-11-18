import { useContext, useReducer, useState } from "react";
import Store from "./Store/Store";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Reducer from "./Store/Reducer";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Devs } from "./Pages/Devs";
import { EventDescription } from "./Pages/EventDescription";
import { Events } from "./Pages/Events";
import { Queries } from "./Pages/Queries";
import { Sponsers } from "./Pages/Sponsers";
import { Category } from "./Pages/Category";
import { GuestLecture } from "./Pages/GuestLecture";
import { ErrorPage } from "./Pages/Errorpage";
import { UserProfilePage } from "./Pages/UserProfilePage";
import { Particle } from "./Components/particle";
import SplashScreen from "./Components/SplashScreen";
import TopBar from "./Components/TopBar";
function App() {
  const initialState = useContext(Store);
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [splash, setSplash] = useState(true);
  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/about" exact component={About} />

      <Route path="/contact" exact component={Contact} />

      <Route path="/query" exact component={Queries} />

      <Route path="/devs" exact component={Devs} />

      <Route path="/lectures" exact component={GuestLecture} />

      <Route path="/categories" exact component={Category} />

      <Route path="/sponsers" exact component={Sponsers} />

      <Route path="/events/:category" exact component={Events} />

      <Route
        path="/eventdetails/:category/:event"
        exact
        component={EventDescription}
      />
      <Route path="/user" exact component={UserProfilePage} />

      <Route path="*" component={ErrorPage} />
    </Switch>
  );

  setTimeout(() => {
    setSplash(false);
  }, 2000);

  if (splash) return <SplashScreen />;

  return (
    <Store.Provider value={[state, dispatch]}>
      <div className="App">
        <div className="particle-style">
          <Router>
            <TopBar />
            {routes}
          </Router>
        </div>

        <Particle />
      </div>
    </Store.Provider>
  );
}

export default App;
