import React from "react";
import { useState } from "react";
function App(){
  const [bulbOn,setBulbOn]=useState(true);
  return <div>
    
    <LightBulb bulbOn={bulbOn} setBulbOn={setBulbOn}/>
  </div>
}

function LightBulb({bulbOn,setBulbOn}){
  //this is rolling up the state to the least common ancestor of both components that need to use the state
  // const [bulbOn,setBulbOn]=useState(true);
  return <div>
    <BulbState bulbOn={bulbOn}/>
    //this situation is prop drilling because we are passing the state and setState to the child component which is not ideal because if we have a deep component tree then we have to pass the state and setState through many components which is not ideal
    <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn}/>
  </div>
}
function BulbState({bulbOn}){
  // const [bulbOn,setBulbOn]=useState(true); we cannot use here because 
  // thisstate is also used by toggleBulbState component so that both can use same 
  // state we need to roll up the state to the least common ancestor 
  return <div>
    {bulbOn? "Bulb ON": "Bulb off"}

  </div>
}
function ToggleBulbState({bulbOn,setBulbOn}){
  function toggle(){
  // we pass it as on function because this way we can get the current state and toggle it
  //setBulbOn(currentState =>!currentState);
  // or we can get both current state and setState in param
    setBulbOn(!bulbOn)
  }
  return <div>
    <button onClick={toggle}> toggle the bulb</button>

  </div>
}
// we do this when we don't have any knowledge of state management library

export default App