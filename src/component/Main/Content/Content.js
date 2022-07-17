import React from 'react'
import {data} from "../PostData"
import './Content.css'
import DataCard from '../DataCard'


function Content(props) {
  return (
    <div className='content'>
        <div>
            <h1>First Post</h1>
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
        <div className='content'>
          {props.dataPost.map(datas => <DataCard className="content" dataObj={datas} key={datas.id} />)}
        </div>
    </div>
  )
}

export default Content