import { useEffect, useState } from "react";

function App() {
  

   
   
 

  return (
    <div>
      {error ? <h1>{error}</h1> : <h1>{post ? post.title : "Loading..."}</h1>}
    </div>
  );
}

export default App;