import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar">
        <div className="navleft"> Instagram</div>
        <div className='navcenter'>
            <ul className='navlist'>
                <li className='navlistitem'>HOME</li>
                <li className='navlistitem'>ABOUT</li>
                <li className='navlistitem'>CREATE</li>
                <li className='navlistitem'>CONTACT</li>
            </ul>
        </div>
        <div className='navright'>
            <i className=" navsearch fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default NavBar