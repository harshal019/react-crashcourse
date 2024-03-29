import { useState } from 'react'

import './App.module.css'
import AddHeading from './components/AddHeading'
import AddTodo from './components/AddTodo'
import WelcomeMessage from './components/WelcomeMessage'
import TodoItems from './components/TodoItems'

function App() {

  const [todoItems, setTodoItems] = useState([]);
    
  const handleNewItem=(itemName,itemDueDate)=>{
  //  console.log(`New Item Added: ${itemName} Date:${itemDueDate}`)
   const newTodoItems=[
      ...todoItems,
      { name:itemName, dueDate:itemDueDate},
   ];
   setTodoItems(newTodoItems);
  };
  
 const handleDelete =(todoItemName)=>{
   const newTodoItems =todoItems.filter((item) => item.name !== todoItemName);
   setTodoItems(newTodoItems);
   console.log(`Item Deleted: ${todoItemName}`);
 }
  
 return(
    <div className='todo-container'>
      <AddHeading/>

      <AddTodo onNewItem= {handleNewItem} />
      <WelcomeMessage todoItems={todoItems}/>
      
      <TodoItems
      todoItems={todoItems}
      onDeleteClick={handleDelete}
      />
    
    </div>
 )
}

export default App
