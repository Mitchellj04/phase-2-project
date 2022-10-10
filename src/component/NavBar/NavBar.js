import {useState, React} from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import data2 from '../../data/Postdata.json'

const NavBar = () => {
  const [title, setTitle] = useState()
  const [dataTitle, setDataTitle] = useState([])


  const handleChange = (e) => {
      setTitle(e.target.value)
  }

  const handleSearch = (data2) => {
      console.log(data2.title)
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
            <button onClick={handleSearch}><i className=" navsearch fa-solid fa-magnifying-glass"></i></button>
            <input type="text" placeholder='Search Post ...' onChange={handleChange}></input>
        </div>
    </div>
  )
}

export default NavBar