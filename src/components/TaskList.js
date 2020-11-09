import React from 'react';
import Task from './Task';

function TaskList({ todoList, deleteMode, changeAddMode, changeEditMode, onClickDelete }) {

  return (
    <div className="to-do">
      <ul>
        {todoList.map((todo, index) => (
          <Task 
            key={todo.id} 
            todo={todo} 
            index={index}
            deleteMode={deleteMode}
            changeAddMode={changeAddMode}
            changeEditMode={changeEditMode}
            onClickDelete={onClickDelete}
            />
        ))}
      </ul>
    </div>
  )
}

export default TaskList
