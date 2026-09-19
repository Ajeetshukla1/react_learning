
import {BrowserRouter,Routes,Route,Link,Outlet, useNavigate} from "react-router-dom"


function App() {
  
  return <div>
    
    <BrowserRouter>

      <Routes>
         {/* //this will be my parent route in which children are wrapped,by using outlet we can display chhildrens of the parent  */}
        <Route  path="/" element={<Layout/>}> 
        {/* this is base path */}
       
          <Route path="/Class-11" element={<Class11/>}/>
          <Route path="/Class-12" element={<Class12/>}/>
          <Route path="/" element={<Landing/>}/>

           {/* if any page not found then render the ErrorPage */}
          <Route path="*" element ={<ErrorPage/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  </div>
}
function Layout(){
  return <div style ={{height:"100vh",background:"green"}}>
    <Header/>
    <div style={{height:"90vh",background:"red"}}>
      <Outlet/> 
      {/* The <Outlet /> component in react-router-dom acts as a placeholder that renders the matching child route component within a parent route layout. It is the key to creating nested routing and shared layouts (like persistent navigation bars, headers, or sidebars) without duplicating UI code across multiple pages. [1] (https://reactrouter.com/api/components/Outlet), [2] (https://namastedev.com/topics/ep-07-finding-the-path/what-is-the-outlet-component-in-react-router), [3] (https://stackoverflow.com/questions/73573071/react-router-what-is-the-purpose-of-using-outlet-alone-without-context) */}

    </div>
    footer

  </div>
}
function Header(){
  return <div>
    {/* we cannot use Link outside the BrowserRouter */}
    <Link to="/">Allen</Link>
    <Link to="/Class-11">Class 11</Link>
    <Link to="/Class-12">Class 12</Link>
  </div>

}
function Class11(){
  const navigate=useNavigate();
  function redirectUser(){
    navigate("/")
  }
  return <div>
    Neet program for class 11
    <button onClick={redirectUser}>Go back to landing page</button>
  </div>
}
function Class12(){
  return <div>
    Neet program for class 12
    
  </div>
}
function Landing(){
  return <div>
    Welcome to allen
    
  </div>
}
function ErrorPage(){
  const navigate=useNavigate();
  function redirectUser(){
    navigate("/")
  }
  return <div>
    Sorry page not found
    <button onClick={redirectUser}>Go back to landing page</button>
  </div>
}

export default App
