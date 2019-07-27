import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Headers from './Header';
import Login from './Login';
import Signup from './Signup';
import PollView from './pollView';
import Main from './Main';
import CreatePoll from './CreatePoll';
import Footer from './Footer';

function Routeall() {
  return (
    <Router>
      <div>
        <Headers />

        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/polls" component={PollView} />
        <Route path="/createpoll" component={CreatePoll} />

        <Footer />
      </div>
    </Router>
  );
}

export default Routeall