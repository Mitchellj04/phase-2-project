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
import { useEffect, useState } from "react";


function App() {
const [postList, setPostList] = useState([])
// console.log(postList)


useEffect(() => {
 fetch('http://localhost:4001/data2')
 .then(resp => resp.json())
 .then(data2 => {
   setPostList(data2)
   
 })
},[])

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home postList={postList} />
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
      </Switch>
    </Router>
  )
}

export default App;
