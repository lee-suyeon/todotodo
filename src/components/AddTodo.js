import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function AddTodo({ todoList, deleteMode, changeDeleteMode, onClickMove, history, selectedDate, getTodayList }) {
  
  const onClickAddBtn = () => {
    onClickMove();
    //changeAddMode();
    
    if(deleteMode) {
      changeDeleteMode();
    }
  }

  const onClickTasks = () => {
    onClickMove();
    history.push('/todolist')
  }

  return (
    <div className="add-todo">
      <Link to="/todolist">
        <div className='task'>
        <span style={{ fontWeight: 'bold' }}>{todoList ? todoList.filter(todo => todo.date === selectedDate).length : "0"}</span>
          <span onClick={onClickTasks}> TASKS </span>
          <i className="icon-menu" />
        </div>
      </Link>
      <div className="delete">
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

export default withRouter(AddTodo);
