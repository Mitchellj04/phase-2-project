import React, {useState} from 'react'
import './Create.css'

function Create ({handleSubmit, handleChange, createData}) {
//     const [data, setData] = useState({
//         newtitle: "",
//         descrip: "",
//         category: "",
//     })


    // console.log(data);


    // function handle(e){
    //     const newdata = {...data}
    //     newdata[e.target.id]= e.target.value
    //     setData(newdata)

    // }

    // const handleSubmit2 = (e) => {
    //     e.preventDefault()
    //     console.log(data)
    // }

  return (
    <div className='create'>
        <form className='createForm' onSubmit={handleSubmit}>
            <div className='createFormFile'>
                <label htmlFor='fileInput'>
                    <i className="fileIcon fa-solid fa-folder-plus"></i>
                </label>
                <input 
                    type="file" 
                    id="fileInput"
                    name="image"
                    value={createData.image}
                    style={{display:"none"}} 
                    onChange={handleChange}
                    />
                <input 
                    type="text" 
                    id="title"
                    name="title"
                    value={createData.title}
                    placeholder='Title' 
                    className='createTitle'
                    onChange={handleChange}
                    />
            </div>
            <div className='createFormFile'>
                <textarea
                    placeholder='Write about your experience you have had.'
                    type="text"
                    name="description"
                    id="description"
                    value={createData.description}
                    className='createTitle textStory'
                    onChange={handleChange}
                ></textarea>
                <button className='submitPost' type='submit'>Create</button>
            </div>
            <div className='checkbox'>
                <label>CATEGORIES</label>
                <select value={createData.category} onSelect={handleChange} >
                    <option name="category" id="mountain" >Mountain</option>
                    <option id="camping">Camping</option>
                    <option id="beach">Beach</option>
                    <option id="town">Town</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Create