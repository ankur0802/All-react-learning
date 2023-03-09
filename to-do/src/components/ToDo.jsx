import React, { useState } from 'react'
import ToDoLists from './ToDoLists';

export default function ToDo() {
    const [Todo, setTodo] = useState('')
    const [Item, setItem] = useState([]);
    

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const handelChange = (e)=>{
        
        setTodo(e.target.value)
       
    }

    const showTodo = ()=>{
        setItem([...Item, Todo])
        setTodo('')
        
    }

    const deleteItems = (id)=>{
        setItem(Item.filter((arrElement, index)=>{
                return id!==index;
        }))
    }

  

  return (
    <>
     <div className='container'>
        <h1>To-DO list</h1>
        <br/>
        <form onSubmit={handleSubmit}>
            <input
             type="text" 
             placeholder='Enter Todos..'
             onChange={handelChange}
             value={Todo}
             name='todo'
             />
            <button className='btn' type='submit' onClick={showTodo}>+</button>

        </form>
        <div className='container'>
            <ol>
                {Item.map((itemval, index)=>{
                   return <ToDoLists 
                   text={itemval} 
                   key={index} 
                   id={index}
                   onSelect={deleteItems}
                   />
                })}
            </ol>
        </div>
     </div>
    </>
  )
}
