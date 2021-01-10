import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home";
import Nostalgia from "./components/Nostalgia";
import Joy from "./components/Joy";
import Despair from "./components/Despair";
import Tranquility from "./components/Tranquility";
import About from "./components/About/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <section className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nostalgia" component={Nostalgia} />
          <Route exact path="/joy" component={Joy} />
          <Route exact path="/despair" component={Despair} />
          <Route exact path="/tranquility" component={Tranquility} />
          <Route exact path="/about" component={About} />

          {/*} <Redirect to="/" />*/}
        </Switch>
      </Router>
      <Footer />
    </section>
  );
};

export default App;