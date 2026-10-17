import { useEffect, useState } from "react";
import { usePostTitle,useFetch } from "./hooks/useFetch";
import { usePrev } from "./hooks/use-prev";
function App(){
  
  const postTitle = usePostTitle();
  // const {data} = useFetch("https://jsonplaceholder.typicode.com/posts/1");
  //but this will not work on dynamic url because the useEffect will only run once when the component is mounted and it will not run again when the url changes. So we need to add the url as a dependency to the useEffect so that it will run again when the url changes.

  const [currentPostId, setCurrentPost] = useState(1);
  const {data,loading}=useFetch(`https://jsonplaceholder.typicode.com/posts/${currentPostId}`,10);
  const prev=usePrev(data);
  //this will return the previous value of the data state variable. So when we click on the next post button it will show the previous post title.

  ///                useDebounce hook
  //for useDebounce we can use it to debounce the input value so that it will not make the api call on every keystroke but only after the user has stopped typing for a certain amount of time. So we can use it to debounce the input value and then make the api call with the debounced value.
  const [inputVal,setInputVal]=useState("");
  function change(e){ //e is event variable which is passed to the function when the event is triggered. It contains information about the event that occurred. In this case it is the input change event. It contains information about the input element that triggered the event and the new value of the input element.
    setInputVal(e.target.value);
  }
  function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);
      
    useEffect(() => {
      const handler =setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
    //it will clear the old timeout and set a new timeout whenever the value or delay changes. So it will only set the debounced value after the user has stopped typing for the specified delay time.
    return debouncedValue;
    //this will return the debounced value after the specified delay time. So we can use it to debounce the input value and then make the api call with the debounced value.
  }
  // this will get debounce after certain amount of time after the user has stopped typing. So we can use it to debounce the input value and then make the api call with the debounced value.
  const debouncedValue=useDebounce(inputVal);
  useEffect(() => {
    console.log("expensive operation with debounced value",debouncedValue);

  },[debouncedValue]);
  //now instead of calling the api on every keystroke we can call the api only when the user has stopped typing for a certain amount of time. So we can use the debounced value to make the api call.

   
   
 

  return (
    <div>
      <button onClick={() => setCurrentPost(currentPostId + 1)}>Next Post</button>
      {postTitle ? <h1>{postTitle}</h1> : <h1>Loading...</h1>}
      {loading ? <h1>Loading...</h1> : <h1>{data.title}</h1>}
      <h2>Previous Post Title: {prev?.title}</h2>
      {JSON.stringify(data)} 
      <input type="text" onChange={change}></input>
    </div>
  );
}

export default App;