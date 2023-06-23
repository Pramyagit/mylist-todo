import React,{useRef} from "react"
import {FaPlus} from "react-icons/fa";
import './AddItem.css'




function AddItem({ newItem, handleInput, handleAdd }) {
   
    const inputRef=useRef();
    return (

        <form className="form" action="" onSubmit={handleAdd}>
            <label aria-label="add item">Add Item</label>
            <input ref={inputRef}value={newItem} type="text" id="Add" placeholder="enter here" onChange={(e) => handleInput(e)} autoComplete="off" autoFocus required />
            <button id="AddBtn" type="submit" araia-button="Add" 
            onClick={()=>inputRef.current.focus }>
                <FaPlus />
            </button>
        </form>

    )
}

export default AddItem