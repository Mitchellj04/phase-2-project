import './About.css'

const About = () => {
  return (
    <div className='aboutMe'>
        <div className='aboutMeItem'>
            <span className='aboutMeTitle'>ABOUT ME</span>
            <img src='/Images/kozMe.jpg'/> 
            <p>
            I have been passionate about the outdoors since I was a kid. My family would take an annual camping trip to the Adirondecks.
            This inspired me to try and travel more, since then I have been to majority of the carribean, all of the east coast, and even Australia. 
            I plan to continue to travel the world and see new and exciting places. 
            </p>
        </div>
        <div className='aboutMeItem'>
            <span className='aboutMeTitle'>CATEGORY</span>
            <ul className='aboutMeList'>
                <li className='listitem'>Mountains</li>
                <li className='listitem'>Camping</li>
                <li className='listitem'>Beach</li>
                <li className='listitem'>City</li>
            </ul>
        </div>
    </div>
  )
}

export default About