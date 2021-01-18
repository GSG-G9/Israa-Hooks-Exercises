import React,{useState} from 'react'

let colorArray = ["White","Yellow","Fuchsia","Red","Silver","Olive","Purple",
"Maroon","Aqua","Lime","Blue","Green","Black"
];

function Exercise2(){
    const [color,setColor]=useState("#FFFFFF")
    const handleColor=(color)=>{
        setColor(color)
    }
    return(
       <div className="color-div" style={{backgroundColor: color}}>
          { colorArray.map((item) => <button className="color-button" onClick={()=>handleColor(item)}>{item}</button> )}
       </div>
    )
    }
    export default Exercise2;