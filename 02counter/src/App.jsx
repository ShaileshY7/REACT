import {useState} from 'react'
import './App.css'

function App() {
  const [counter,setCounter]=useState(15)
  //let counter=15;

  const addValue = ()=>{
    console.log('value added',counter);
   //counter=counter+1
    setCounter(prevcounter=>prevcounter+5)
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)
  }

  const removeValue = () =>{
     setCounter(prevcounter=>prevcounter-1)
     setCounter(prevcounter=>prevcounter-1)
     setCounter(prevcounter=>prevcounter-1)
     setCounter(prevcounter=>prevcounter-1)
     setCounter(prevcounter=>prevcounter-1)
  }
  return (
    <>
       <h1>Chai aur react</h1>
      <h3>Counter value:{counter}</h3>

      <button 
      onClick={addValue}
      >Add value{counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove value{counter}</button>
    
    </>
  )
}

export default App
