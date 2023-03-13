import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AsioxPokemon = () => {

  const [num, setNum] = useState(1)
  const [names, setNames] = useState('')
  const [moves, setMoves] = useState(0)


  useEffect(()=>{
    async function getData(){
   let val = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
   
   const names = val.data.name
   const moves = val.data.moves.length
   setNames(names)
   setMoves(moves)
  
  }
  getData()
  })

const handleChange = (e)=>{
  setNum(e.target.value)
 
}

  return (
    <>

     <h1>You select <span style={{color:'red'}}> {names}</span>  pokemon</h1>
     <h1> And this has <span style={{color:'red'}}> {moves}</span>  moves</h1>

    <h1>you select me {num} no.</h1>
    <select className='container' onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="5">5</option>
    </select>
    </>
  )
}

export default AsioxPokemon