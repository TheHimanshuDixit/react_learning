import React from 'react'

export default function ClickEvent() {
    let data = "anil sandhu"
    function Apple(){
        data = "peter"
        alert(data)
    }
  return (
    <div className='App'>
        <h1>{data}</h1>
        {/* <button onClick={apple()}>Apple</button>   wrong method to call  */}
        <button onClick={apple}>Apple</button>
        {/* <button onClick={()=>alert("hello")}>Apple</button> */}
        {/* <button onClick={()=>apple()}>Apple</button> */}
    </div>
  )
}
