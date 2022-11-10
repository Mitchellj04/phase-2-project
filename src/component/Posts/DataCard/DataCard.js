import React from 'react'
import { useState } from 'react'
import './DataCard.css'

function DataCard({dataObj: {title, category, description, image, id}}) {


  return (
    <div className='contentCard' key={id}>
          <h1>{title}</h1>
          <img className="lighthouse" src={image}/>
          <h3>Category: {category}</h3>
          <p className='contentDescription'>{description}</p>
    </div>
  )
}

export default DataCard