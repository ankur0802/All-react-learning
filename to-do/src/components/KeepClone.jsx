import React, { useState } from "react";
import Card from "./Card";
const KeepClone = () => {
  const [Keep, setKeep] = useState("");
  const [Title, setTitle] = useState("");
  const [Item, setIten] = useState([]);

  const handleChange = (e) => {
    setKeep(e.target.value);
  };

  const handleChange1 = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const showKeep = () => {
    console.log('clicked');
    setIten([...Item, Keep]);
  };

  const deleteKeep = (id) => {
    
    setIten( Item.filter((element, index)=>{
                return id!==index;
        }))
  };

  return (
    <>
      <div className="container">
        <h4 className="left">Keep</h4>
        <div className=" container ">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              onChange={handleChange1}
              value={Title}
            />
            <input
              type="text"
              placeholder="Enter to keep"
              onChange={handleChange}
              value={Keep}
            />
          </form>
          <button className="btn" type="submit" onClick={showKeep}>
            +
          </button>
        </div>
      </div>
      <div>
        {Item.map((itemval, index) => {
          return <Card
                    text={itemval} 
                    title={Title} 
                    onSelect={deleteKeep}
                    id={index}
                    key={index}
                    />;
        })}
      </div>
    </>
  );
};

export default KeepClone;
