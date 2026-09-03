import { useState } from 'react'

import './App.css'


export default function App() {
  const [todos,setTodos]=useState([{
    title:"GO to gym",
    description:"hit gym regularly",
    done:false
  }]);
  function addTodo(){
    // let newArray=[...todos];//creates new array and push all element of todos in the new Array , spread operator
    // newArray.push({
      // title:document.getElementById("title").value,
      // description:document.getElementById("description").value,
      // done:true
    // })
    // setTodos(newArray)

    ///    OR

    setTodos([...todos,{
        title:document.getElementById("title").value,
      description:document.getElementById("description").value,
      done:true
    }])
  }
 
  return (
    <div>
      <input type="text" id="title" placeholder='title'></input>
      <input type="text" id="description" placeholder='description'></input>
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo)=>(
        <Todo title={todo.title} description={todo.description} done={todo.done}/>
      ))}
      
    </div>
    
   
);
}
function Todo(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
      <h1>{props.done?"task is done": "task is not done"}</h1>
    </div>
  )
}