// const [seconds, setSeconds] = useState(20)
// Create a button on the page that fires off a timer. The timer will count down and every 20 seconds will fire off a confirm window. 
// If the person confirms  (“Do you want to keep reading?”) 
// the user will go back to the page and be able to keep looking at the website and if they don’t the will be directed to the contact page.

//pseudo 
//create a button to listen for an event handler 
//the event handler will handle if the button is clicked to start a count down timer
//create a useState for the seconds of the timer 
//create a function to count down the timer every second 
//when the timer hits 0 a confirm window will pop up
//if the confirm window is okay stay on current page 
//if the confirm window is candled? switch to contact page 



const [seconds, setSeconds] = useState(20)

let count = 20

const updateSeconds = () => {
 const intervalUpdate = setInterval(timerCount, 1000)


}

function confirmWindow (){
  if(seconds === 0){
    if(window.confirm("Do you want to keep reading?")){
      return null
    }else {
      window.open('http://localhost:3000/contact')
    }
  }
}

confirmWindow();

function timerCount(){
  if(count > 0){
    count -= 1;
    setSeconds(count)
  }
  else {
    count = 20
  }
  
}
 
const handleClick = () => {
  updateSeconds()

}





//display all of the names of the posts 

//pseudo:
//map through the postList to get the names of the posts
//create a state to hold the names of the map <-- did not need to
//create a button to display the names when clicked
//when the button is clicked the posts will become visible 

