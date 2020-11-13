import React, { useState } from 'react';

function Task({ todo, index, deleteMode, changeAddMode, changeTaskState, changeEditMode, onClickDelete }) {
  const [ done, setDone ] = useState(false);

  // task 클릭하면 done or delete
  const onClickTask = id => {
    if(deleteMode) {
      onClickDelete(id);
    } else {
      changeTaskState(id);
    }
  }

  const checkedHandler = e => {
    setDone(e.target.checked)
  }

  // editmode -> 수정할 대상 가져오기, 입력 폼 활성화
  const onChangeEditMode = (e, index) => {
    e.stopPropagation();
    
    changeEditMode(index);
    changeAddMode();
  }

  return (
    <div className="task">
      <li className="task-list" onClick={() => onClickTask(todo.id)}>
        {deleteMode ?
          <i className="icon-cancel" 
            onClick={() => onClickTask(todo.id)}
          /> :
          <div>
            <input
              className="check-box"
              type="checkbox"
              name="check"
              checked={todo.done}
              value={todo.id}
              onChange={checkedHandler}
            />
            <i className="icon-check" />
          </div>
        }
        <span className={[ 'todo-text', todo.done && 'done'].join(' ')}>
          {todo.text}
        </span>
        <span className="date">{todo.date}</span>
        <i className="icon-edit" onClick={e => onChangeEditMode(e, index)}/>  
      </li>
    </div>
  )
}

export default Task
