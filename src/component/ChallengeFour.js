import React, {useState, useEffect} from 'react'

// Add a feature that includes:
// - A counter that starts at zero, it will automatically start incrementing by 1.
// -Play/Pause Button: Will have read “Pause” while the counter is incrementing, and “Play" while the counter is paused. Additionally it should be able to pause the counter when you press “Pause” and continue the increment when pressing “Play”
// - WIl have a “Reverse" button that will decrease the counter by 1

//pseudo 
//create two buttons 
//Button #1 play/pause which will change based on when it is clicked
//Button #2 reverse button that still decrease the counter instead of increase
//Button #1 when clicked will increament by 1 each second (play ----> pause )
//Button #1 when clicked again will pause/stop the counter (pause ---> play)
//handle click that will start the timer and change the text inside of the button 
//useState will keep track of the current time 
//useEffect? 
//practice pseudo



//write a blog about useEffect 
//all of the attributes and what can be done with useEffect 
//interval, setInterval 
//detailed explination 
//be able to understand and explain useEffect
//cleanup useEffect



function ChallengeFour({name, setName}) {

  const [nameChange, setNameChange] = useState(name)


const message = `Hello there, ${nameChange}!`


useEffect(() => {
  document.title = `Welcome to our website ${nameChange}`
  console.log("useEffect - ChallangeFour")
}, [nameChange])

const handleChange = (e) => {
  setName(e.target.value)
}

const handleClick = () => {
  setNameChange(name)
}


return (
  
  <div>
    <p>{message}</p>
  <input type={"text"} placeholder={"change name..."} onChange={handleChange}></input>
  <button onClick={handleClick}>Submit</button>
  </div>
)






// const [counter, setCounter] = useState(0)
// const [started, setStarted] = useState(true)
// const [buttonName, setbuttonName] = useState("Play")
// const [addition, setAddition] = useState(1)





// useEffect(() => {
//   let updateInterval; 
//   if(started){
//   updateInterval = setInterval( function updateTimer(){
//         setCounter((counter) => counter += addition)   
//     }, 1000)
//   }
//   else {
//     clearInterval(updateInterval)
//   }
  
//   return () => clearInterval(updateInterval)
// }, [started, addition])


// const handleStart = () => {
//   setStarted((started) => !started)
//   setAddition(1)
// }


// const handleReverse = () => {
//   setStarted(true)
//   setAddition(-1)

 
// }


//   return (
//     <div>
//        <button onClick={handleStart}>{started ? "pause": "play"}</button>
//        <button onClick={handleReverse}>Reverse</button>
//        <p>{counter}</p>
//     </div>
//   )
}

export default ChallengeFour




