import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import './Create.css'

function Create () {
    const history = useHistory();
    const [createData, setCreateData] = useState({
        id:'',
        title:'',
        description:'',
        category:'',
        image:''
  })


    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(postList)
        history.push('/')
        fetch('http://localhost:4005/data2',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(createData)
        }).then((response) => {
            console.log(response)
        })
      }

      const handleChange = (e) => {
        setCreateData({...createData, [e.target.name]: e.target.value})
        // console.log(e.target.value)
    }
    
    const handleSelect = (e) => {
        setCreateData({...createData, [e.target.name]: e.target.id})
        // console.log(e.target.id)
    }


  return (
    <div className='create'>
        <form className='createForm' onSubmit={handleSubmit}>
            <div className='createFormFile'>
                <label htmlFor='fileInput'>
                    <i className="fileIcon fa-solid fa-folder-plus"></i>
                </label>
                <input 
                    type="text"
                    id="imageInput"
                    name="image"
                    value={createData.image} 
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
                Mountain<input name="category" value={createData.select} type="checkbox" id="mountain" onChange={handleSelect}/>
                Camping<input name="category" value={createData.select} type="checkbox" id="camping" onChange={handleSelect}/>
                Beach<input name="category" value={createData.select} type="checkbox" id="beach" onChange={handleSelect}/>
                Town<input name="category" value={createData.select} type="checkbox" id="town" onChange={handleSelect}/>
            </div>
        </form>
        <div>
            <img className="journeyPic" src="/Images/sharejourney.jpg"></img>
        </div>
    </div>
  )
}

export default Create