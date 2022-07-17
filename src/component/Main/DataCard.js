import React from 'react'
import './DataCard.css'

function DataCard({dataObj: {title, category,description, src}}) {
  return (
    <div className='content'>
          <h1>{title}</h1>
          <img className="lighthouse" src={src}/>
          <h3>Category: {category}</h3>
          <p className='contentDescription'>{description}</p>

</div>
  )
}

export default DataCard