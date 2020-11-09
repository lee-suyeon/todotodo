import React from 'react';
import { Link } from 'react-router-dom';

function AddTodo({ todoList, deleteMode, changeAddMode, changeDeleteMode, onClickDelete }) {
  
  const onClickAddBtn = () => {
    changeAddMode();
    
    if(deleteMode) {
      changeDeleteMode();
    }
  }

  return (
    <div className="add-todo">
      <div className='task'>
        <span style={{ fontWeight: 'bold' }}>{todoList.length} </span>
        <span>TASKS</span>
        {todoList.length > 0 && 
          <i className="icon-menu"></i>
        }
      </div>
      <div className="delete">
        {todoList && todoList.length > 0 &&
          <i className="icon-delete" onClick={changeDeleteMode}/>
        }
        {deleteMode &&
          <div className="delete-all">전체 삭제</div>
        }
      </div>
      <Link to="/todolist">
        <div className='add-new' onClick={onClickAddBtn}>
          ADDNEW
          <i className="icon-add"/>
        </div> 
      </Link>
    </div>
  )
}

export default AddTodo
