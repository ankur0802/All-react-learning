import React, {useState} from 'react'
import ClearIcon from '@mui/icons-material/Clear';

export default function Todo2e(props) {
  const [style, setStyle] = useState('none')

  const setCss = ()=>{
    setStyle('line-through')
  }
  
  return (
    <div className='container'>
        <li style={{ textDecoration: style}}>{props.text}  <ClearIcon className='right' onClick={setCss}/> </li>

    </div>
  )
}
