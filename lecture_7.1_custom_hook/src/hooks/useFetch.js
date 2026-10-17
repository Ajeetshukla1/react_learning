import { useState, useEffect } from "react";
function usePostTitle(){
    const [post, setPost] = useState({});
    async function fetchPost(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        setPost(data);
    }
    useEffect(() => {
        fetchPost();
    }, []);
    return post.title;
}


//a generic usefetch hook which can be used to fetch any data from any url
function useFetch(url,timeout){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    async function fetchData(){
        //initially set loading to true so that we can show a loading spinner while the data is being fetched
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        //after the data is fetched set loading to false so that we can hide the loading spinner
        setLoading(false);
    }
    useEffect(() => {
        fetchData();
         const interval = setInterval(() => {
            fetchData();
        }, 1000*timeout); // it will fetch the data every 10 seconds and update the data state variable and re render the component
        // cleanup function to clear the interval when the component is unmounted
        return () => clearInterval(interval);
        // what does this cleanup function do? it will clear the interval when the component is unmounted so that it doesn't keep running in the background and cause memory leaks.
    },[url,timeout]); // we need to add url and timeout as a dependency to the useEffect so that it will run again or rerender when the url or timeout changes.
    //for dynameic url we need to add the url as a dependency to the useEffect so that it will run again or rerender when the url changes.
   // we can also add error handing to this hook by adding a try catch block in the fetchData function and setting an error state variable and returning it from the hook so that we can show an error message to the user if the data fetching fails.
    return {data, loading};
}

export {usePostTitle, useFetch};