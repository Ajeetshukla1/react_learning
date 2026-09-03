import { useEffect, useState } from 'react'
export const ToggleMessage=()=>{
  let [isVisible,setVisible]=useState(true);
  function toggle(){
    setVisible(!isVisible);
  }

  return (
    <div>
      <button onClick={toggle}>toggle message</button>
      {isVisible && <p>this message is conditionally rerendered</p>}
    </div>

  );
}