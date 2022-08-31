import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import './Create.css'

function Create ({setPostList, postList}) {
    const history = useHistory();
    const [createData, setCreateData] = useState({
        id: '',
        title:'',
        description:'',
        category:'',
        imgage:''
  })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(postList)
        setPostList([createData,...postList])
        history.push('/')
        // setCreateData({
        //   id: '',
        //   title: '',
        //   description: '',
        //   category: '',
        //   image: ''
        // })
        console.log('hello')
      }

      const handleChange = (e) => {
        setCreateData({...createData, [e.target.name]: e.target.value})
        console.log(e.target.value)
    }
    
    const handleSelect = (e) => {
        setCreateData({...createData, [e.target.name]: e.target.id})
        console.log(e.target.id)
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