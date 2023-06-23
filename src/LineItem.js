// ̥import React from 'react'
import { FaTrashAlt} from "react-icons/fa";
function LineItem({item,handleChange,handleDelete}) {
  return (
    <li  >
    <input onChange={()=>handleChange(item.id)} type="checkbox" checked={item.checked}></input>
    <label style={(item.checked)?{textDecoration:'line-through'}:null}
    onClick={()=>handleChange(item.id)}>{item.describe}</label>
    <FaTrashAlt className='fa'
    role="button"
    tabIndex="0"
    onClick={()=>handleDelete(item.id)}
    />
    </li>
  )
}

export default LineItem