import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
        <div className='aboutItem'>
            <span className='aboutTitle'>ABOUT ME</span>
            <img src="/Images/kozMe.jpg" />
            <p>I have been passionate about the outdoors since I was a kid. My family would take an annual camping trip to the Adirondecks.
            This inspired me to try and travel more, since then I have been to majority of the carribean, all of the east coast, and even Australia. 
             </p>
        </div>
        <div className='aboutItem'>
            <span className='aboutTitle'>CATEGORY</span>
            <ul className='aboutList'>
                <li className='listItem'>Mountains</li>
                <li className='listItem'>Camping</li>
                <li className='listItem'>Beach</li>
                <li className='listItem'>Town</li>
            </ul>
        </div>
    </div>
  )
}

export default About