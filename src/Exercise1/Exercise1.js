import React,{useState} from 'react'

function Exercise1(){
   const [counter,setCounter]=useState(0);
const handleIncrement=()=>{
    setCounter(counter+1)
}
const handleDecrement=()=>{
    setCounter(counter-1)
}
const handleReset=()=>{
    setCounter(0)
}
return(
    <div>
    <p>{counter}</p>
   <button onClick={()=>handleIncrement()}>+ Add</button>
   <button onClick={()=>handleDecrement()}>- Sub</button>
   <button onClick={()=>handleReset()}>reset</button>
    </div>

)
}
export default Exercise1;