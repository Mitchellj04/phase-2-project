import React from 'react'
import './Content.css'
import DataCard from '../DataCard/DataCard'


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