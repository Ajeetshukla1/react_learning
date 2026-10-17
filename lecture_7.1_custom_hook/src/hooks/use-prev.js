import { useEffect, useRef } from "react";
export const usePrev = (value) => {
    const ref = useRef(); 
    useEffect(() => {
        ref.current = value;
    }, [value]);
    //when the value changes the useEffect will run and update the ref.current with the new value. So when we return ref.current it will return the previous value of the state.
    //this useEffect is run asynchronously whenever the component is re rendered 
    return ref.current;
    // in react it returns first and effects get called later
    //first return is run and then the useEffect is run and the ref.current is updated with the new value. So when we return ref.current it will return the previous value of the state.
}
//why we use useRef here? because we want to store the previous value of the state and we don't want to re render the component when the previous value changes. useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
//we use useEffect here because we want to update the ref.current value whenever the value changes. useEffect runs after every render and it runs after the DOM is updated. So we can use it to update the ref.current value after the DOM is updated.
//this code is incorrect 
//blog link- https://giacomocerquone.com/blog/life-death-useprevious-hook/
//because it is returning the previous render value not the previous state value. And render can be caused by many things not just state change. So it is not a reliable way to get the previous state value. It can be used to get the previous render value but not the previous state value.
//better approach is to use useRef to store the previous value of the state and update it in useEffect whenever the state changes. This way we can get the previous value of the state reliably.

function useAlternativePrevious(value, initial) {
  const ref = useRef({ target: value, previous: initial });
  if (ref.current.target !== value) {
    ref.current.previous = ref.current.target;
    ref.current.target = value;
  }
  return ref.current.previous;
}