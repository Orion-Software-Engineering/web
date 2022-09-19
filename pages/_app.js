import "../styles/globals.css";
import { StaticRouter as Router, Route, Switch, Link } from "react-router-dom"
import about from "../pages/about";
import events from "../pages/events";
import index from "../pages/index";
import login from "../pages/login";
import organiserprofile from "../pages/organiserprofile";
import signup from "../pages/signup";
import support from "../pages/support";


function MyApp({ Component, pageProps }) {
  return (
    <Router>
      <Switch>
        <Route exact path="/about" component={about} />
        <Route exact path="/events" component={events} />
        <Route exact path="/index" component={index} />
        <Route exact path="/login" component={login} />
        <Route exact path="/organiserprofile" component={organiserprofile} />
        <Route exact path="/signup" component={signup} />
        <Route exact path="/support" component={support} />
      </Switch>
      <Component {...pageProps} />;
    </Router>);
}

export default MyApp;
