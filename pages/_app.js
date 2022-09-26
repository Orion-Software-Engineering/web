import "../styles/globals.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import index from "../pages/index";
import about from "../pages/about";
import events from "../pages/events";
import login from "../pages/login";
import organiserprofile from "../pages/organiserprofile";
import signup from "../pages/signup";
import support from "../pages/support";



function MyApp() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={about} />
        <Route path="/events" component={events} />
        <Route path="/login" component={login} />
        <Route path="/organiserprofile" component={organiserprofile} />
        <Route path="/signup" component={signup} />
        <Route path="/support" component={support} />
        <Route path="/" exact component={index} />
      </Switch>

    </Router>
  );
}

export default MyApp;
