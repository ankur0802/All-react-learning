import React, { useEffect, useState } from 'react'

const Chal8 = () => {

    const [count, setCount] = useState(0)
   useEffect(()=>{
    document.title=`you click me ${count} times`
   })


    const handleClick =()=>{
        setCount(count+1)
       
    }

  return (
    <>
    <div className='container center'>
        <button className='btn center' onClick={handleClick}>Click me {count} </button>

    </div>
    </>
  )
}

export default Chal8