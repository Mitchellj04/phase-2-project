import NavBar from "./component/NavBar/NavBar";
import Home from "./component/Main/Home";
import Create from "./component/Create/Create"
import {BrowserRoute, Route, Router, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
      <NavBar />
      <Create />
    </Router>
  )
}

export default App;
