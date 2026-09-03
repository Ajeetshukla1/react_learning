import { useEffect, useState } from 'react'
import { PostComponent} from './postcomponent'
import { ToggleMessage } from './toggleMessagecomponenet'

function App() {

  // how to iterate array in react for component rerendering
  const [posts,setpost]=useState([]);

  // makes the array of post component 
  const postcomponents=posts.map(post=><PostComponent
  name={post.name}
  subtitle={post.subtitle}
  image={post.image}
  time={post.time}
  description={post.description}
  />
   )

  function addPost(){
    //adds the new post in aray and rerenders the whole array every time the add post button is clicked
    setpost([...posts,{
    name:"raman",
    subtitle:"30 followers",
    time:"3m ago",
    image:"https://data.indianexpress.com/election2019/about/images/politician/narendra-modi.jpg?w=330",
    description:"abki baar modi sarkar"
  }])

  }

  return (
    <div style={{background:"#D3D3D3",height:"100vh"}}>
      <button onClick={addPost}>add post</button>
      <div style={{display:"flex",justifyContent:"center"}}>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          <div>
           {postcomponents}
          </div>
          
          
           

        </div>
        
      </div>
      <div>
          {/* each component has its own state defined if i change state of one of them the other will be not effected */}
          <ToggleMessage />
          <ToggleMessage />
          <ToggleMessage />
        </div>
     
    </div>
  )
}

export default App
