import React from 'react'
import { TodoItem } from './TodoItem';

const TodoItems = ({todoItems,onDeleteClick}) => {
  return (
    <div >
        {   todoItems?.map( (item)=>(
            <TodoItem 
            key={item.name}
             todoDate={item.dueDate} 
             todoName={item.name}
            onDeleteClick={onDeleteClick}/>
        ))}
    </div>
  );
}

export default TodoItems;