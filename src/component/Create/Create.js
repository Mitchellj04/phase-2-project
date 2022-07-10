import React from 'react'
import './Create.css'

const Create = () => {
  return (
    <div className='create'>
        <form className='createForm'>
            <div className='createFormFile'>
                <label htmlFor='fileInput'>
                    <i className="fileIcon fa-solid fa-folder-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder='Title' className='createTitle'/>
            </div>
            <div className='createFormFile'>
                <textarea
                    placeholder='Write about your experience you have had.'
                    type="text"
                    className='createTitle textStory'
                ></textarea>
                <button className='submitPost'>Create</button>
            </div>
        </form>
    </div>
  )
}

export default Create