
import {useState} from "react"
function App() {
 const [ name , setName] = useState("");
 const handleChange = (event) => {
  setName(event.target.value);
 }

  return (
    <>
    <input type="text" placeholder="Enter your name" onChange={handleChange} />
    <p>Your name: {name}</p>
  </>
  )
}

export default App
