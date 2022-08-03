import React from 'react'
import './DataCard.css'

function DataCard({dataObj: {title, category,description, image}}) {
  return (
    <div className='content'>
          <h1>{title}</h1>
          <img className="lighthouse" src={image}/>
          <h3>Category: {category}</h3>
          <p className='contentDescription'>{description}</p>

</div>
  )
}

export default DataCard