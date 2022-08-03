import React from 'react'
import {data} from "../PostData"
import './Content.css'
import DataCard from '../DataCard'


function Content({postList}) {
  return (
    <div className='content'> 
        <div className='content'>
          {postList.map(data2 => <DataCard className="content" dataObj={data2} key={data2.title} />)}
        </div>
    </div>
  )
}

export default Content