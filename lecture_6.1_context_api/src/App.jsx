
import { useState,createContext,useContext } from "react";
const BulbContext = createContext();
function BulbProvider({children}){
  const [bulbOn,setBulbOn]=useState(true);
  return <BulbContext.Provider value={{bulbOn:bulbOn,setBulbOn:setBulbOn}}>
    {children}
  </BulbContext.Provider>
}
function App(){
  
  return <div>
    
    {/* <BulbContext.Provider value={{bulbOn:bulbOn,setBulbOn:setBulbOn}}>
      <LightBulb />
    </BulbContext.Provider> */}
    {/* instead of doing this we can create a wrapper component that will take the children as props */}

    {/* here we are using context api to avoid prop drilling and we are using a wrapper component to provide the context to the children components */}
    <BulbProvider>
      <LightBulb />
    </BulbProvider>
    <Parent />

  </div>
}

function LightBulb(){
  
  return <div>
    <BulbState />
    <ToggleBulbState />
  </div>
}
function BulbState(){
  const {bulbOn} = useContext(BulbContext);
  return <div>
    {bulbOn? "Bulb ON": "Bulb off"}

  </div>
}
function ToggleBulbState(){
  const {bulbOn,setBulbOn} = useContext(BulbContext);
  function toggle(){

    setBulbOn(!bulbOn)
  }
  return <div>
    <button onClick={toggle}> toggle the bulb</button>

  </div>
}

///  Drawbacks of using context api 
/// multiple rerenders of the components even if that component doesn't need to render again.


// in this case case there is a increase and decrease button, if we click on increase/decrease button then all three component will get re render 
// even if only counter component needs to re render. This is because we are using context api and the value of the context is changing and all the components that are consuming the context will re render.
const CountContext = createContext();
function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>
}

function Parent() {
  return (
    <CountContextProvider>
      <Incrase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

function Decrease() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Incrase() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
  const {count} = useContext(CountContext);
  return <p>Count: {count}</p>;
}



export default App