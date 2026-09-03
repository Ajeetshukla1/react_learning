import { useState,useEffect } from 'react'


function App() {
  const [count,setCount]=useState(0);
  function increase(){
    setCount(c => c+1);
  }
  return <div>
    <Counter count={count}/>
     {/* //passing props to a component */}
    <button onClick={increase}>
    Increase Count
    </button>
  </div>

  
}
function Counter(props){
  useEffect(function(){
    console.log("mount");
    return function(){
      console.log("unmount");
      
    }
  },[])
  useEffect(function(){
    console.log("count has changed");
    return function(){
      console.log("cleanup");
      
    } //moment the value get changed this will be returned as a part of the cleanup
    // why do we do clean up 
    //eg if we are in home bar and we switch to noticification bar then we need to stop the connection with the home bar
    // before switching to the noticification bar
    
    
  },[props.count])
  return <div>
    Counter {props.count}
  </div>
}

export default App
