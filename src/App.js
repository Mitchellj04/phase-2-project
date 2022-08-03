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
import { useEffect, useState } from "react";


function App() {
const [postList, setPostList] = useState([])
const [createData, setCreateData] = useState({
      id: '',
      title:'',
      description:'',
      category:'',
      imgage:''
})

// const [imageList, setImageList] = useState([])

useEffect(() => {
 fetch('http://localhost:5000/data2')
 .then(resp => resp.json())
 .then(data2 => {
   setPostList(data2)
   
 })
},[])


const handleSubmit = (e) => {
  e.preventDefault()
  setPostList([createData,...postList])
  // const imagepath = createData.image.split('fakepath\\')
  // const newimage = imagepath.join("")
  // createData.image = newimage
  setCreateData({
    id: '',
    title: '',
    description: '',
    category: '',
    image: ''
  })
  

}


const handleChange = (e) => {
    setCreateData({...createData, [e.target.name]: e.target.value})
}

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
          <Create handleChange={handleChange} handleSubmit={handleSubmit} createData={createData} />
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
