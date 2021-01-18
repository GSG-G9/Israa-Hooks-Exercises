import React,{useState} from 'react'
function Exercise4(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPass,setConfirmPass]=useState("");
    const [error,setError]=useState(null);
    const [signed,setSigned]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!email||!password||!confirmPass){
             setError("Please , fill all the fields")
        }
        else if(password !== confirmPass){
            setError("The password and and confirm password are different")
        }
        else{
            setError(null)
            setSigned(true)
            
        }
    }
    const handleDelete=()=>{
        setEmail("");
        setPassword("")
        setConfirmPass("")
        setSigned(false)
    }
    return(
       <div>
            <form  className="sign-form">
            
            <input type="email" id="email" name="email"  
             className="todo-input" onChange={e=>setEmail(e.target.value)}/>Enter your email

            
            <input type="password" id="password" name="password"  
             className="todo-input" onChange={e=>setPassword(e.target.value)}/>Enter your password
    
            <input type="password" id="confirmpassword" name="confirmpassword" 
              className="todo-input" onChange={e=>setConfirmPass(e.target.value)}/>confirm password
            
            <button 
            className="todo-button"
            type='submit'
            value='  Add to-do '
           onClick={handleSubmit}
            > Sign up </button>

        </form>
    {error &&  <div className="error-div">{error}</div>}
    {(signed && !error) && <div className="data-div">
        <h2>User Information</h2>
    <p><b>Email: </b>{email}</p>
    <p><b>Password: </b>{password}</p>
    <button 
            className="todo-button"
            type='submit'
            value='  Add to-do '
           onClick={handleDelete}
            > delete</button>
        </div>}
   
       </div>
    )
    }
    export default Exercise4;