import NavBar from "./component/NavBar/NavBar";
import Home from "./component/Main/Home"
import Create from "./component/Create/Create";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import AboutMe from "./component/About/AboutMe";
import Beach from "./component/Post/Beach/Beach";
import Mountain from "./component/Post/Mountain/Mountain";
import Camping from "./component/Post/Camping/Camping"
import Town from "./component/Post/Town/Town"
import Contact from "./component/Contact/Contact";
import {data} from "./component/Main/PostData"
import { useState } from "react";



function App() {


  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <AboutMe />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/beach">
          <Beach />
        </Route>
        <Route path="/mountain">
          <Mountain />
        </Route>
        <Route path="/camping">
          <Camping />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
