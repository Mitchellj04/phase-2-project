import React from 'react'
import './Camping.css'

const Camping = () => {
  return (
    <div className='mainDiv'>
        <div className='campingTitle'>
            <span>Camping</span>
        </div>
        <div className='post'>
            <div className='postmain'>
                <img src="/Images/camping/newcastlecamp.jpg"></img>
                <div className='postInfo'>
                    <h1>Newcastle Camp nine mile beach</h1>
                    <p>Camping on the beach is a much different experience than camping in the woods. 
                        Although it has its benefits like waking up to a view of the ocean. 
                        It is also not as comfortable as one might think. 
                        Let alone there is no protection from the ocean breeze which can get quite windy during the night.
                        One morning we packed up the 4X4 and headed north to Newcastle. 
                        We arrived to nine mile beach which in fact is nine miles long. We had the entire beach to ourselves on this trip.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Camping