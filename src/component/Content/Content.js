import React from 'react'
import './Content.css'

function Content() {
  return (
    <div className='content'>
        <div>
            <h1>Blog Post</h1>
        </div>
        <img className='lighthouse' src="/Images/Lighthouse.jpg"></img>
        <div>
            <div>
                <p className='contentDescription'>
                Austrlia has some of the most beautiful beaches you can visit. This beach is on the northern end of NSW in a town called DeeWhy. 
                At the top of the cliff there is a Lighthouse where you can see across all of the beach and the surrounding town.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Content