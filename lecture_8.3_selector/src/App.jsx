import {usEffect, useState} from 'react';
import {useSetRecoilState, useRecoilValue, RecoilRoot} from 'recoil';
import {counterAtom, evenSelector} from './store/atoms/counter';
function App() {
  return (
    <div>
      <RecoilRoot>
        <Buttons />
        <Counter/>
        <IsEven/>
      </RecoilRoot>
    </div>
  )
}
function Buttons(){
  const setCount = useSetRecoilState(counterAtom);
  function increase(){
    setCount(c=> c + 2)

  }
  function decrease(){
    setCount(c=> c - 1)
  }
  return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
}
function Counter(){
  const count = useRecoilValue(counterAtom);
  return <p>Count: {count}</p>
}
function IsEven(){
  const isEven = useRecoilValue(evenSelector);
  return <p>Is Even: {isEven ? 'Yes' : 'No'}</p>
}
export default App;