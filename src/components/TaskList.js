import React, { useEffect } from 'react';
import Task from './Task';

function TaskList({ todoList, deleteMode, changeTaskState, changeAddMode, changeEditMode, onClickDelete }) {

  return (
    <div className="to-do">
      <ul>
        {todoList.map((todo, index) => (
          <Task 
            key={todo.id} 
            todo={todo}
            changeTaskState={changeTaskState}
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
