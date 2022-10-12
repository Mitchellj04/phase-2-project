import React, { useState } from 'react'



const Test = () => {
    

     
      


   
  return (
    <div>
        <input type="text" placeholder='Find Here ...'></input>
        <button>Find Me!</button>
    </div>
  )
}

export default Test


// Count words in the input field and. If the words are less than 10 you fire An alert that says feedback received, 
// otherwise you say too many words, you can only submit ten words of feedback!




//Like count tester


// const Test = () => {
//     const [count, setCount] = useState(0)

//     const handleLikes = (e) => {
//         setCount(count + 1)
//     }

//     const handleDisLike = () => {
//         if (count > 0) {
//             setCount(count -1)
//         }
        
//     }

//   return (
//     <div>
//         <button className='likebtn' onClick={handleLikes}> Like </button>
//         <button className='dislikebtn' onClick={handleDisLike}> Dislike</button>
//         <p>Like count: {count}</p>
//     </div>
//   )
// }

// export default Test



// const Test = () => {
//     const [wordCount, setWordCount] = useState()
//     const [counter, setCounter] = useState()

//     const handleInput = (e) => {
//         let words = e.target.value
//         setWordCount(words)
//         console.log(words)
//     }

//     const handleSubmit = () => {
//         setCounter(wordCount.length)
//         if (counter < 10){
//             alert("Feedback received")
//         }
//         else {
//             alert("Feedback not received")
//         }
//     }

//   return (
//     <div>
//         <input type="text" placeholder="type here..." onChange={handleInput}></input>
//         <button onClick={handleSubmit}>Submit</button>.
//         <p>The length of this word is: {counter}</p>
//         <p>Sum of words: </p>
//     </div>
//   )
// }

// export default Test
