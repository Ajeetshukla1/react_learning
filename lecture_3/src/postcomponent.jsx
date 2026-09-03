import { useEffect, useState } from 'react'
const style={width:200,backgroundColor:"white",borderRadius:10,borderColor:"gray",borderWidth:1,padding:20}
//how to style in react 
//in react we cannot put - in between styling tags
// so convert the next letter to capital letter
//eg) background-color => backgroundColor
// we give style in the form of object
// eg) <div style={{width:200}}

export function PostComponent({name,subtitle,time,image,description}){
  return <div style={style}>
    
    <div style={{display:"flex"}}>
    <img src={image} style={{
      width:20,
      height:20,
      borderRadius:20,
    }}/>
    <div style={{fontSize:10,marginLeft:10
    }}>
      <b>
        {name}
      </b>
      <div>{subtitle}</div>

      {/* //Conditional rendering 
      //it will render only if we pass the time parameter */}

      {time!=undefined && <div style={{display:"flex"}}>
        <div>{time}</div>
        <img src={"https://thumbs.dreamstime.com/b/black-round-wall-clock-isolated-white-vector-illustration-166769728.jpg"} style={{width:5,height:5 }}  />
      </div>}
      
      
      
    </div>
    
  </div>
  <div style={{fontSize:12,marginTop:12}}>
        {description}
      </div>
  </div>
  
}