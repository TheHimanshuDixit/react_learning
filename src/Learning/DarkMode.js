import React from 'react'
import { useState } from 'react'

export default function DarkMode() {

    let style = {
        color : 'white',
        background : 'black'
    }
    const [myStyle,setMyStyle] = useState(style);
    const [btn,setBtn] = useState("Enable Light Mode");

    const togglestyle = ()=> {
        if(myStyle.color === "white"){
            setMyStyle({
                color : 'black',
                background : 'white' 
            })
            setBtn("Enable Dark Mode")
        }
        else{
            setMyStyle({
                color : 'white',
                background : 'black' 
            })
            setBtn("Enable Light Mode")
        }
    }

    return (
        <div style={myStyle}>
            <button style={myStyle} type="button" onClick={togglestyle} className="btn btn-primary">{btn}</button>
        </div>
    )
}
