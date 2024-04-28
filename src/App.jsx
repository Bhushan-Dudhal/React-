import { useState } from 'react'
import './App.css'

function App() {


let [counter,setCounter] = useState(0)

  // let counter = 15;

  const addValue = () => {
    // console.log("Clicked", counter);

    // counter = counter + 1;
    setCounter(counter +1 )
  }


  
  const removeValue = () => {
    setCounter( counter -1)
  }


  return (
    <>
    
      <h1>React</h1>
      <h2>counter value: {counter}</h2>
      <br />

      <button
       onClick={addValue}
      >Add Value { counter}</button>
      <br /><br />
      <button
       onClick={removeValue}
      >remove Value{counter}</button><br />

      <p>footer: {counter }</p>

     
    </>
  )
}

export default App
