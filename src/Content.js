import React, { useState, useEffect } from 'react'
import './content.css'
import Itemss from './Itemss';
// const [name,setName]=useState("subscriber");
// function handleName(){
//     const name=["Ramya","Prabu","Neethu"];
//     const result=Math.floor(Math.random()*3);
//      setName(name[result]);
// }
// useEffect(()=>{
//     alert('subscribed')
// });
function Content({ items, handleChange, handleDelete }) {
  return (
    /* <p>{name}</p>
<button type="button" onClick={handleName}>Subscribe {}</button> */
    <main>
      <h1 className='h1'>My Work List</h1>
      {(items.length) ?
        (
          <Itemss
            items={items}
            handleChange={handleChange}
            handleDelete={handleDelete}
          />
        ) : <p style={{ fontSize: "20px", fontWeight: "bold", color: "rgb(41, 143, 210)" }}>Your List is Empty</p>}

    </main>
  );
}
export default Content;
