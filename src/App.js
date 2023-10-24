import {useState,useCallback} from 'react'
import './App.css';

function App() {
  const [lenght,setLength]= useState(8)
  const [numberAllowed, setNumberAllowed] = useState
  (false);
  const[charAllowed,setCharAllowed] = useState(false)
  const[password,setPassword]= useState("")

  const passwordGenertor= useCallback(()=> {
    let pass= ""
    let str = "sanjana"

  }, [lenght,numberAllowed,charAllowed,setPassword])
  return (
    <div>
     

      <h1 className="text-4xl text-center text-white">password generator</h1>
    </div>
  );
}

export default App;
