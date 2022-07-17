import React, {useState} from 'react'
import './Create.css'

function Create () {
    const [data, setData] = useState({
        newtitle: "",
        descrip: "",
        category: "",
    })


console.log(data);


function handle(e){
    const newdata = {...data}
    newdata[e.target.id]= e.target.value
    setData(newdata)

}

function handelSubmit(e){
    e.preventdefault()
}

  return (
    <div className='create'>
        <form className='createForm' onSubmit={handelSubmit}>
            <div className='createFormFile'>
                <label htmlFor='fileInput'>
                    <i className="fileIcon fa-solid fa-folder-plus"></i>
                </label>
                <input 
                    type="file" 
                    id="fileInput" 
                    style={{display:"none"}} 
                    />
                <input 
                    type="text" 
                    id="newtitle"
                    value={data.newtitle}
                    placeholder='Title' 
                    className='createTitle'
                    onChange={(e) => handle(e)}
                    />
            </div>
            <div className='createFormFile'>
                <textarea
                    placeholder='Write about your experience you have had.'
                    type="text"
                    id="descrip"
                    value={data.descrip}
                    className='createTitle textStory'
                    onChange={(e) => handle(e)}
                ></textarea>
                <button className='submitPost'>Create</button>
            </div>
            <div className='checkbox'>
                <label>CATEGORIES</label>
                <label >
                    <input 
                        id="mountain" 
                        type="checkbox" 
                        className='inputCheck' 
                        onClick={(e) => handle(e)}
                        >
                    </input>Mountain</label>
                <label>
                    <input 
                        id="camping" 
                        type="checkbox" 
                        className='inputCheck'
                        onClick={(e) => handle(e)}
                        >
                    </input>Camping</label>
                <label>
                    <input 
                        id="beach" 
                        type="checkbox" 
                        className='inputCheck'
                        onClick={(e) => handle(e)}
                        >
                    </input>Beach</label>
                <label>
                    <input 
                        id="town" 
                        type="checkbox" 
                        className='inputCheck'
                        onClick={(e) => handle(e)}
                        >
                    </input>Town</label>
            </div>
        </form>
    </div>
  )
}

export default Create