import React from 'react'
import './Contact.css'

const Contact = () => {
 

  return (
    <div className='contact'>
        <div className='contactTitle'>
            <span>Contact</span>
        </div>
        <div className='contactDetails'>
            <div className='contactMain'>
                <img className="contactImg" src="/Images/mountains/kozTop.jpg"></img>
                <div>
                    <h1>Contact Info</h1>
                    <div className='contactPost'>
                        <p >Please feel to reach out to me reguarding any trips you may be taking in the future.
                        As well as if you would like to be featured on my instagram page please reach out to any of the contact options. 
                        Or feel free to DM me on social media that is linked above. I would be happy to share your story on my blog and give you credit for the pictures taken or the information you would like to post.
                    </p>
                    <ul className='contactList'>
                        <li className='listItem'>Phone: 203-909-0635</li>
                        <li className='listItem'>Email: mitchelljm04@gmail.com</li>
                        <li className='listItem'>Instagram: @live.lifeandtravel</li>
                        <li className='listItem'>Address: PO Box #2 Newport RI, 02840</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}


export default Contact