import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [num, setNum] = useState(0)
    const [nums, setNums] = useState(0)

    useEffect(()=>{
        alert('Clicked')
    },[num])

    const handleClick = ()=>{
        setNum(num+1)
    }
    const handleClicks = ()=>{
        setNums(nums+1)
    }

  return (
    <>
    <div className='container'>
            <button className='btn center '  onClick={handleClick}>Click me {num}</button>
            <button className='btn center '  onClick={handleClicks}>Click me {nums}</button>
    </div>
    </>
  )
}

export default Useeffect