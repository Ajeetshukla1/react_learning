import {useState,useEffect,memo} from 'react'


function App() {
 
  // we can optimize useState hook and control rerenders using memo 

  return (

    <Counter />
    
    
  )
}
function Counter(){
  const [count,setCount] = useState(0);

  return (
  <div>
    <MemoizedCurrentCount count={count} />
    <Increase setCount={setCount} />
    <Decrease setCount={setCount} />
  </div>)
}
//define a new component for current count and wrap it with memo 
const MemoizedCurrentCount = memo(CurrentCount);

const Increase=memo(function({setCount}){
  
  function increase(){
    setCount(prev => prev + 1)
  }
  return <button onClick={increase}>Increase</button>
});
const Decrease=memo(function({setCount}){
  

  function decrease(){
    setCount(prev => prev - 1)
  }
  return <button onClick={decrease}>Decrease</button>
});
function CurrentCount({count}){
 
  return <p>Count: {count}</p>
}
  
export default App;
