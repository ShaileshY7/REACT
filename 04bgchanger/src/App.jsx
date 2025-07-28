
import { useState } from 'react'
import './App.css'

function App() {
const [color,setColor]=useState("olive")

  return (
    <div className="w-100% h-screen duration-200"  style={{backgroundColor:color}}>
           <div className='flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-4'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2'>
              <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor:"red"}}>
                Red
              </button>
               <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor:"green"}}>
                Green
              </button>
               <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor:"blue"}}>
                Blue
              </button>
               <button onClick={()=>setColor("violet")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor:"Violet"}}>
                Violet
              </button>
               <button onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor:"yellow"}}>
                Yellow
              </button>
               <button onClick={()=>setColor("Black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor:"black"}}>
                Black
              </button>
               <button onClick={()=>setColor("Pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor:"pink"}}>
                Pink
              </button>
              <button onClick={()=>setColor("gray")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor:"gray"}}>
                Gray
              </button>
              <button onClick={()=>setColor("Purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor:"purple"}}>
                Purple
              </button>
              <button onClick={()=>setColor("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'  style={{backgroundColor:"white"}}>
                White
              </button>
            </div>
           </div>
    </div>
  )
}

export default App
