import React from 'react'
import CancelIcon from "@mui/icons-material/Cancel";


const Card = (props) => {

 

  return (
    <>
    <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-0">
            <div className="card-content white-text">
              <span className="card-title">{props.title}</span>
              <p>{props.text}</p>
              <button className="right" onClick={()=>{return props.onSelect(props.id)}}>
                <CancelIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card