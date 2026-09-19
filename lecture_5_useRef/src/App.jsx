import { useState,useRef } from 'react'


function App() {
  const inputRef=useRef();
  function focusOnInput(){
    inputRef.current.focus();
  }
  // why it is better than document.getElementById
  // if there is a case that sign up component is rendered twice than the 
  // than both sign up component will have some id this will lead to confusion

  //building a a clock with start and stop button
  const [currentCount,setCurrentCount]=useState(1);
  // const [timer,setTimer]=useState(0);
  const timer=useRef();
  //let timer=0;
  //we cannot use raw variable for this because every time a rerender happens its value gets reinitialised and 
  //it losts its last value
  function startClock(){
     let value=setInterval(function(){
      setCurrentCount(c=>c+1);
    },1000);
    //setTimer(value);
    //but this will do a one extra rerender because we are displaying this value in html therefore we do not 
    //need to rerender the component for this
    //to minimize the rerende we will use useRef
    timer.current=value;
  }
  function stopClock(){
    console.log(timer);
    clearInterval(timer.current);
    
  }

  

  return (
   <div>
    <div>
      signUp
    {/* it create a reference for this dom element
    now we can access this dom element using ref */}
    <input ref={inputRef} type="text" />
    <input type="text" />
    <button onClick={focusOnInput}>submit</button>
    </div>

    {/* clock with start and stop */}
    <div>
      {currentCount}
      <button onClick={startClock}>start</button>
      <button onClick={stopClock}>stop</button>

    </div>
   </div>
  )
}

export default App
