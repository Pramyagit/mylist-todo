// import logo from './logo.svg';
import React, { useState, useEffect} from 'react';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import AddItem from './AddItem';


function App() {

  // const lists = [
  //   {
  //     id: 1,
  //     checked: true,
  //     describe: "practical test1"
  //   },
  //   {
  //     id: 2,
  //     checked: false,
  //     describe: "practical test2"
  //   },
  //   {
  //     id: 3,
  //     checked: false,
  //     describe: "practical test3"
  //   },
  // ]
  // const [items, setItems] = useState(lists);

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todolist')) || []);

  useEffect(()=>{
    JSON.parse(localStorage.getItem('todolist'))
    //her use to fecth data in outside like dummydata in json
  },[])

  const handleChange = (id) => {
    const listItems = items.map(
      (item) => item.id === id ? { ...item, checked: !item.checked } : item)
    //    console.log(`id:${id}`) 
    setItems(listItems);
    localStorage.setItem("todolist", JSON.stringify(listItems))
  }
  function handleDelete(id) {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems);
    localStorage.setItem("todolist", JSON.stringify(listItems))
  }
  // additem
  const [newItem, setNewItem] = useState('')
  function handleInput(e) {
    setNewItem(e.target.value);
  }
  function addItem(describe) {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, describe }
    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setItem("todolist", JSON.stringify(listItems))

  }
  function handleAdd(e) {
    e.preventDefault();
    if (!newItem) {
      return '';
    }
    alert("ARE YOU ADD YOUR ITEM?")
    // console.log('added')
    addItem(newItem);
    setNewItem('')
  }

  return (
 
    <div className='containers'>

      <Header title="To Do List"/>
      <div className='App'>
        <AddItem
          newItem={newItem}
          handleInput={handleInput}
          handleAdd={handleAdd}
        />
        <Content
          items={items}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      </div>
    
       <Footer
      // length={items.length}
      />
    </div>
  );
}

export default App;

