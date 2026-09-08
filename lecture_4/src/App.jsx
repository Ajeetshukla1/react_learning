import { useEffect, useState } from 'react';
import React, { Component } from 'react';

function App() {
  
      const [showTimer,setShowTimer]=useState(true);

      return <div style={{display:"flex"}}>
        <Card children={<div style={{color:"green"}}>
          what do you want to input <br></br>
          <input type={"text"} />
          </div>}/>
        
        {/* //either I can pass the children as props  */}

        {/* // I can wrap the content to be inserted in card  */}
        <Card>
          <div style={{color:"green"}}>
          hello there
        </div>
        </Card>
        
        {/* //list and key in react 
        // when using list we need to specify key to the every element of the list so can react can differentiate between them easily
        //if we donot do this the react will work but it will give warning 
        // it will also optimize performance 
        // //for eg if a flip happen between the component the react will not know the flip is happend and react will remove both component and readd it if we do not give key
        // //if we specify then react will knwo a flip had happened then it will simple remove the first element and then insert it after the second element */}

        <div>
          {/* list or array */}
          {[
            <Todo key={1} title={"Eat food"} done={false}/>,
            <Todo key={2} title={"go to gym"} done={true}/>

          ]}
        </div>
        <div>
          {/* by wrapping the componet which may have error with error boundary 
          if there is an error whole app will not crash 
          only the component which has error will show us a fallback UI using errorboundary component */}
          <ErrorBoundary>
            <Card1/>
          </ErrorBoundary>
          
          <Card2/>
          
        </div>
        
      </div>
}
function Card({children}){
  //we are creating the outer structure of the card which will be static 
  // and inside will be components that will by dynamic
  return <div style={{background:"black",borderRadius:10,color:"white",padding:20,margin:10}}> 
  {children}

  </div>

}
function Todo({title,done}){
  return <div>
    {title}-{done ? "done" :"not done"}
  </div>
}
//class based component 
//it is just like classes in java
// we also need to import component class from the react
class ClassCounter extends Component {
    state = { count: 0 };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

// errroo boundary example

function Card1(){
  // for eg lets give an error in Card1
  //by doing this the whole app will crash
  //So error boundary catches javascript errors in their child component tree and 
  //and display a fallback UI
  //we make a class error boundary and we wrap our Card with error boundary component which need 
  //to be fixed

  //we are throwing error to show a eg
  throw new Error("error while rendering")
  return <div style={{background:"red",borderRadius:20,padding:20,margin:20}}>
    error boundary example

  </div>
}
function Card2(){
  return <div style={{background:"red",borderRadius:20,padding:20,margin:20}}>
    error boundary eg

  </div>
}
// this is errro boundary component 
// we wrapped the component with error boundary component which has error 
// if the error occurs it displays a fallback UI
// for eg here it will show -> something went wrong
// we can make error boundary component only in class based component 
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <div style={{background:"red",borderRadius:20,padding:20,margin:20}}>
    something went wrong, this message is coming because of error and whole app is not crashing because of usage of errorBoundary

  </div>;
        }

        return this.props.children; 
        //since we have wrapped the Card1 with errorboundary component therefor the 
        //card1 will become the childer for the errorboundary component
    }
}
export default App
