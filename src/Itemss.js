// ̥̥̥import React from 'react';

import LineItem from "./LineItem";
function Itemss({items,handleChange,handleDelete}) {
  return (
    <ul className="ul">
           
    {
        items.map((item)=>(
          <LineItem
          key={item.id}
          item={item}
      handleChange={handleChange}
      handleDelete={handleDelete}
          />
))}
    
 </ul>
  )
}

export default Itemss