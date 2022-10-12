import {useState, React} from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";


const NavBar = ({postList, setPostList}) => {

  const [searchBlog, setSearchBlog] = useState()

  const handleChange = (e) => {
    let finder = e.target.value
    setSearchBlog(finder)
  }

  const handleClick = (e) => {
    e.preventDefault()
    let filtered = postList.filter((item) => item.title.toUpperCase().includes(searchBlog.toUpperCase()))
    setPostList(filtered)
  }



  return (
    <div className="navbar">
        <div className="navleft"><a href='https://www.instagram.com/live.lifeandtravel/?hl=en'><i className="fa-brands fa-instagram"></i></a></div>
        <div className='navcenter'>
            <ul className='navlist'>
                <li className='navlistitem'><Link className='link' to="/">HOME</Link></li>
                <li className='navlistitem'><Link className='link' to="/about">ABOUT</Link></li>
                <li className='navlistitem'><Link className='link' to="/create">CREATE</Link></li>
                <li className='navlistitem'><Link className='link' to="/contact">CONTACT</Link></li>
            </ul>
        </div>
        <div className='navright'>
            <button onClick={handleClick} className="searchButton"><i className=" navsearch fa-solid fa-magnifying-glass"></i></button>
            <input onChange={handleChange} className="titleSearch" type="text" placeholder='Search Post ...'></input>
        </div>
    </div>
  )
}

export default NavBar