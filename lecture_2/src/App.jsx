import { useEffect, useState } from "react";




/// Conditionall rendering


export default function App(){
  let [counterVisible,setCounterVisible]=useState(true);
  useEffect(function(){
    setInterval(function(){
      setCounterVisible(c => !c)
    },5000) // the component will amount after every 5 second
  },[])
  //but this creates a performance issue
  //becasue when we unmounted the component we did not stop the setInterval clock
  //the clock never stopped 
  // and when again the component is mounted than another clock starts running 
  // after many times many clock start running
  // so we need to call clear interval every time we unmount
  return <div>
    {counterVisible ? <Counter></Counter>:null}
   
  </div>
}
// the function we need for the component are usually defined within the component
function Counter(){
  const [count,setCount]=useState(0);

  function increaseCount(){
    setCount(count+1);

  }
  function decreaseCount(){
    setCount(count-1);
  }
  function resetCount(){
    setCount(0);
  }
  console.log("counter");
  
  // setInterval(function(){
  //   setCount(count+1);
  // },1000);
  // it will break the application and app will start jittering
  // this happens because Counter function is being called every time the state changes, a new interval also starts, in
  //here the state changes every one second, we can say the app rerender every 1 second
  // to stop the set interval starting every time the state changes 
  // we run it only one time when the counter component get mounted for that we use useEffect
  //life cycle events-> mounting , re- rendering, unmounting


  // now this code will one run once when mounted
  // this will avoid multiple setInterval to be running 
  useEffect(function(){
    console.log("on mount");
    let clock=setInterval(function(){
      console.log("from inside the clock");
      
      setCount(function(count){
        return count+1; // we cannot simply setCount(count+1) becasue we have not passed the count in the dependency array of the useeffect ,we need to pass function in set count to update the count 
      });
    },1000)

    return function(){
      console.log("on unmount");
      clearInterval(clock);
       // this runs when the component is unmounted 
    }
    
    
  },[]); // []-> dependency array

  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase</button>
    <button onClick={decreaseCount}>decrease</button>
    <button onClick={resetCount}>reset</button>
  </div>
}