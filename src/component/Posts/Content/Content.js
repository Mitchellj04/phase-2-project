import React from 'react'
import './Content.css'
import DataCard from '../DataCard/DataCard'
import {useState} from 'react'


function Content({postList, setPostList}) {


  return (
    <div className='content' key={"main"}> 

          {postList.map(data2 => <DataCard dataObj={data2}/>)}

    </div>
  )
}

export default Content