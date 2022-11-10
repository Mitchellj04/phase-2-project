import NavBar from "./component/NavBar/NavBar";
import Home from "./component/Home/Home"
import Create from "./component/Create/Create";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import AboutMe from "./component/About/About";
import Beach from "./component/Category/Beach/Beach";
import Mountain from "./component/Category/Mountain/Mountain";
import Camping from "./component/Category/Camping/Camping"
import Town from "./component/Category/Town/Town"
import Contact from "./component/Contact/Contact";
import ChallengeFour from "./component/ChallengeFour";
import { useEffect, useState } from "react";


function App() {
const [postList, setPostList] = useState([1])
const [name, setName] = useState("Justin")

console.log("App function")

useEffect(() => {
  console.log("useEffect-App")
 fetch('http://localhost:4005/data2')
 .then(resp => resp.json())
 .then(data2 => {
   setPostList(data2)
 })
 .catch((err) => console.log(err))
},[])

  return (
    <Router>
      <NavBar postList={postList} setPostList={setPostList}/>
      <Switch>
        <Route exact path="/">
          <Home postList={postList} setPostList={setPostList}/>
        </Route>
        <Route path="/about">
          <AboutMe />
        </Route>
        <Route path="/create">
          <Create postList={postList} setPostList={setPostList}/>
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
        <Route path="/town">
          <Town />
        </Route>
        <Route path="/challenge">
          <ChallengeFour name={name} setName={setName}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
