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
    <h1>{counter}</h1>
   <button className="todo-button" onClick={()=>handleIncrement()}>+ Add</button>
   <button  className="todo-button" onClick={()=>handleDecrement()}>- Sub</button>
   <button className="todo-button" onClick={()=>handleReset()}>reset</button>
    </div>

)
}
export default Exercise1;