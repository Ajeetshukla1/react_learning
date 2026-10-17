import {useState,useEffect} from 'react'
import {RecoilRoot,useRecoilValue,useSetRecoilState } from 'recoil';
import {counterAtom} from './store/atoms/counter'

function App() {
 

  return (
    //first we need to wrap our app with RecoilRoot component to use recoil state management\
    //second we define our state using atom function outside or inside or in another file  and then we can use it in our components
    // we are defining in another file
    //while usinng we do not need to pass them as props we can directly use them in our components
    // for getting the value we use useRecoilValue hook and for setting the value we use useSetRecoilState hook

    //note- components that uses useRecoilValue or useRecoilState hook will re-render when the value of the atom changes but components that uses useSetRecoilState hook will not re-render when the value of the atom changes because they are not subscribed to that atom
    
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  
    
  )
}
function Counter(){
  

  return (
  <div>
    <CurrentCount />
    <Increase />
    <Decrease />
  </div>)
}
function Increase(){
  const setCount = useSetRecoilState(counterAtom);
  // here we are only setting the value of the state using setCount function and we are not getting the value of the state so we are not using useRecoilValue hook here
  // because of that when the value changes it will not re-render because we are not subscribed to that atom 
  function increase(){
    setCount(prev => prev + 1)
  }
  return <button onClick={increase}>Increase</button>
}
function Decrease(){
  const setCount = useSetRecoilState(counterAtom);

  function decrease(){
    setCount(prev => prev - 1)
  }
  return <button onClick={decrease}>Decrease</button>
}
function CurrentCount(){
  const count = useRecoilValue(counterAtom);
  return <p>Count: {count}</p>
}
  
export default App;
