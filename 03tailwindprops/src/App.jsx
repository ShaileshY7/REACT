


import './App.css'
import Card from './components/Card'
function App() {
  

  return (
    <>
      <h1 className='bg-green-500 text-black rounded-xl p-4 mb-5'>Tailwind Css</h1>
       
       <Card className="mb-4"username="shailesh" btnText="click me"/>
       <Card className='mt-4' username="Rohit"/>
    </>
  )
}

export default App
