import "../styles/globals.css";
import { StaticRouter as Router, Route, Switch } from "react-router-dom";
import index from "../pages/index";
import about from "../pages/about";
import events from "../pages/events";
import login from "../pages/login";
import organiserprofile from "../pages/organiserprofile";
import signup from "../pages/signup";
import support from "../pages/support";
import Team from "../pages/team";
import Continue from "../pages/continue";


function MyApp({ Component, pageProps }) {
  return (
    <Router>
      <Switch>
        <Route path="/index" component={index} />
        <Route path="/about" component={about} />
        <Route path="/events" component={events} />
        <Route path="/login" component={login} />
        <Route path="/organiserprofile" component={organiserprofile} />
        <Route path="/signup" component={signup} />
        <Route path="/support" component={support} />
        <Route path="/team" component={Team} />
        <Route path="/continue" component={Continue} />
      </Switch>
      <Component {...pageProps} />
    </Router>
  );
}

export default MyApp;
