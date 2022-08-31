import React from 'react'
import './Mountain.css'

const Mountain = () => {
  return (
    <div className='mainDiv'>
        <div className='mountainTitle'>
            <span>Mountains</span> 
        </div>
        <div className='post'>
            <div className='postmain'>
                <img src="/Images/mountains/koz1.jpg"></img>
                <div className='postInfo'>
                    <h1>Top Of Kozisco</h1>
                    <p>This was one of our trips to the tallest mountain in Australia.
                    The elevation was 7,000 Feet above sealevel. The trip took us a total of 4 hours to get to the top.
                    The views were amazing though.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mountain