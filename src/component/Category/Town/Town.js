import React from 'react'
import './Town.css'

const Town = () => {
  return (
    <div className='mainDiv'>
        <div className='TownTitle'>
            <span>Town</span>
        </div>
        <div className='post'>
            <div className='postmain'>
                <img src="/Images/town/targonazoo.jpg"></img>
                <div className='postInfo'>
                    <h1>Taronga Zoo Sydney</h1>
                    <p>We decided one day to take a trip to Taronga Zoo in Sydeny. 
                        The trip was about 25 minute drive from our apartment. 
                        We took public transportation to the zoo which took us abobut an hour. 
                        Although it was a long trip is was quite fun to explore some more of Sydney. 
                        The zoo was massive with every animal and reptiple that you can think of. 
                        They even had some enormous salt water crocidiles indigenous to Australia.  
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Town