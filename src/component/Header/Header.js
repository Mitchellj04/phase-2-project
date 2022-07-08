import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='headerTitle'>
            <span className='headerfirst'> Adventure </span>
            <span className='headersecond'> Blog </span>
        </div>
        <img className='headerImg' src="/Images/headerIMG.jpg"/>
    </div>
  )
}

export default Header