import React from 'react'
import { useState } from 'react'

function State_in_functionalComp() {
  const [data, setData] = useState(0)       // by default value 0
  function updateData() {
    setData(data + 1)
  }
  console.warn("______");
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}

export default State_in_functionalComp;