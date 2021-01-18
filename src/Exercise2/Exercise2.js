import React,{useState} from 'react'

let colorArray = ["AliceBlue",
"AntiqueWhite",
"Aqua",
"Aquamarine",
"Azure",
"Beige",
"Bisque",
"Black",
"BlanchedAlmond",
"Blue",
"BlueViolet",
"Brown",
"BurlyWood",
"CadetBlue",
"Chartreuse",
"Chocolate",
"Coral",
"CornflowerBlue",
"Cornsilk",
"Crimson",
"Cyan",
"DarkBlue",
"DarkCyan",
"DarkGoldenRod",
"DarkGray",
"DarkGrey",
"DarkGreen",
"DarkKhaki",
"DarkMagenta",
"DarkOliveGreen",
"DarkOrange",
"DarkOrchid",
"DarkRed",
"DarkSalmon",
"DarkSeaGreen",
"DarkSlateBlue",
"DarkSlateGray",
"DarkSlateGrey"];

function Exercise2(){
    const [color,setColor]=useState("#FFFFFF")
    const handleColor=(color)=>{
        setColor(color)
    }
    return(
       <div className="color-div" style={{backgroundColor: color}}>
          { colorArray.map((item) => <button onClick={()=>handleColor(item)}>Color {item}</button> )}
       </div>
    )
    }
    export default Exercise2;