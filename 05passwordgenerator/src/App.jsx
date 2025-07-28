

import { useState, useCallback ,useEffect,useRef} from 'react';
import './App.css'

function App() {

const [length, sLength] = useState(8)
const [numAllow,setNumAllow]=useState(false)
const [charAllow,setCharAllow]=useState(false)
const [password, setPassword] = useState('')
//useref hook

const passwordRef = useRef(null)
const passwordGenerator=useCallback(()=>{
          let pass=""
          let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
           if(numAllow) str+="0123456789"
          if(charAllow) str+="!@#$%^&*()_+~`"

        for(let i=1;i<=length;i++){
            let char=Math.floor(Math.random()*str.length+1)
            pass+=str.charAt(char)
          }
        setPassword(pass)
       },[length,numAllow,charAllow ,setPassword])

const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,99);
 window .navigator.clipboard.writeText(password)
},[password])


       useEffect(()=>{
        passwordGenerator()
       },[length,numAllow,charAllow,passwordGenerator])
  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700 m-5'>
    <h1 className='text-white text-center mb-4'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
           type="text"
           value={password}
           className='outline-none w-full py-1 px-3'
           placeholder='Password'
           readOnly
           ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={8} max={100} value={length} className='cursor-pointer'
        onChange={(e)=>{sLength(e.target.value)}}
        />
        <lable>length:{length}</lable>
      </div>
      <div className='flex items-center gap-x-1'> 
          <input 
          type='checkbox'
          defaultChecked={numAllow}
          id="numberInput"
          onChange={()=>{setNumAllow((prev)=>!prev)}}
          />
          <label  htmlFor="numberInput">Numbers</label>
      </div>
       <div className='flex items-center gap-x-1'> 
          <input 
          type='checkbox'
          defaultChecked={charAllow}
          id="numberInput"
          onChange={()=>{setCharAllow((prev)=>!prev)}}
          />
          <label  htmlFor="numberInput">Characters</label>
      </div>
    </div>
   </div>
     
    </>
  )
}

export default App
