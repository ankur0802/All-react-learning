import React from 'react'

export default function ToDoLists(props) {

   

  return(
    <><div className='container'>
     <li>{props.text}  <i className="fa-sharp fa-solid fa-trash right" onClick={()=>{
       return props.onSelect(props.id);
     }}></i></li>
     
     </div>
     </>
  )
}
