// import logo from './logo.svg';
import './App.css';
// import DarkMode from './DarkMode';
// import State_in_functionalComp from './Learning/State_in_functionalComp';
// import StateInClassComp from './Learning/stateInClassComp';
import PropsWithFuncComp from './Learning/propsWithFuncComp';
import { useState } from 'react'


function App() {
  const [name,setName] = useState("Harsh")

  return (
    <div className="App">
      {/* <DarkMode/> */}
      {/* <State_in_functionalComp/> */}
      {/* <stateInClassComp/> */}
      <PropsWithFuncComp name={name}/>
      <button onClick={()=>{setName("Dixit")}}>Update</button>
    </div>
  );
}

export default App;
