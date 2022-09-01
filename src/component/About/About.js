import './About.css'
import { Link } from 'react-router-dom'

const AboutMe = () => {
  return (
    <div className='about'>
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
          <span className='aboutMeTitle'>FAVORITE PLACES VISITED</span>
          <ul className='aboutMeList'>
            <li className='listitem'>St. Thomas<br></br><img className="listImg" src="/Images/about/st-thomas.jpeg"/></li>
            <li className='listitem'>Mexico<br></br><img className="listImg" src="/Images/about/mexico.jpg"/></li>
            <li className='listitem'>Puerto Rico<br></br><img className="listImg" src="/Images/about/puerto-rico.jpg"/></li>
            <li className='listitem'>Australia<br></br><img className="listImg" src="/Images/about/outback.jpg"/></li>

          </ul>
        </div>
        <div className='aboutMeItem'>
            <span className='aboutMeTitle'>CATEGORY</span>
            <ul className='aboutMeList2'>
                <li className='listItem'><Link className="link" to="/mountain">Mountain</Link></li>
                <li className='listItem'><Link className="link" to="/camping">Camping</Link></li>
                <li className='listItem'><Link className="link" to="/beach">Beach</Link></li>
                <li className='listItem'><Link className="link" to="/town">Town</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default AboutMe