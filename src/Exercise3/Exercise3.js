import React,{useState} from 'react'
import {FaTrash} from 'react-icons/fa'
function Exercise3(){
   const [todo,setTodo]=useState({
       id:1,
       text:""
   })
   const [todos,setTodos]=useState([])
   const handleSubmit=(e)=>{
    e.preventDefault();
setTodo({
    id:Math.random()*1000,
    text:todo.text
})
 
    setTodos([
        ...todos,todo
    ])
   console.log(todos)
   }

   const deleteHandler=(iid)=>{
      
    setTodos(todos.filter((element)=>{ 
        console.log(element ,element.id )
        console.log("todo",todo.id )
        return element.id !== iid}))
   }
    return(
        <div>
        <form>
             <input 
            className="todo-input"
            type='text'
            id='input'
            value={todo.text}
            onChange={e=>setTodo({...todo,text:e.target.value})}
            />
            <button 
            className="todo-button"
            type='submit'
            value='  Add to-do '
           onClick={handleSubmit}
            >  Add to-do </button>
        </form>
        <ul className="card">
           {todos.map(todo=> (
               <li key={todo.id}  className="todo-row">{todo.text}
                 <button className="delete-icon" onClick={()=>deleteHandler(todo.id)}><FaTrash className="trash"/></button>
                </li>
           )) }
        </ul>
        </div>
    )
    }
    export default Exercise3;