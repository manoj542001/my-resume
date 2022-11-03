
import './App.css';
//import React, {useState } from 'react';
import Resume from './Resume';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import Project from './Project';
import Contact from './Contact';


//import Sample from './sample';\\
//import Hook from './hook';import Sample from './sample';
//import Practise from './practise';
//import Header from './components/header'
//import Link  from './link';
//import Head from './head';
function App() {

  // const[newItem,setNewItem]=useState("");
  // const[items,setItems]=useState([]);
  // function addItem(){
  //   if (!newItem) {
  //     alert("enter an item.")
  //     return;
      
  //   }
    
  //   const item={
  //     id:Math.floor(Math.random()*1000),
  //     value:newItem
  //   };
  //   setItems(oldlist=>[...oldlist,item]);
  //   setNewItem("")
    
  // }
  // function deleteItem(id) {
  //   const newArray=items.filter(item=>item.id !==id);
  //   setItems(newArray)
  // }
  return (
//     <div className="App">
//   <h1>ToDo List App</h1>
//   <input type="text"
//       placeholder='Add an item..'
//       value={newItem}
//       onChange={event=>setNewItem(event.target.value)} >
// </input>
//       <button  onClick={()=>addItem()}>Add</button>
//       <ul>
    
//         {items.map(item=>{
//           return(
//             <li key={item.id}>{item.value} <button className='delete-button' onClick={()=>deleteItem(item.id)}>DEL</button></li>
//           )
//         })} 
//       </ul>
//     </div>
<div>
<Router>
    <Switch>
        <Route exact path='/' element={<Resume/>}></Route>
        <Route exact path='/project' element={<Project/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
      </Switch>
 
  </Router>
  <Resume/>
</div>
  );
}

export default App;
