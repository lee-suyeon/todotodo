import React, { useState } from 'react';
import moment from 'moment';


const TODAY = moment().format("YYYY.MM.DD");

function Form({ todoList, edit, changeAddMode, onClickAddTask, changeEditMode, onClickEditTask }) {
  const [ todo, setTodo ] = useState(edit && edit.editMode ? todoList[edit.index].text : "");

  const inputChangeHandler = e => {
    setTodo(e.target.value);
  }

  const submitHandler = e => {
    e.preventDefault();
    
    if(todo == "") { // 할일 입력값이 없을 때,
      alert('할일을 입력해주세요')
    } else if (edit && edit.editMode) { // editMode일 때,
      changeAddMode();
      onClickEditTask(todo, edit.index);
    } else { // 제출
      onClickAddTask(todo, TODAY);
      changeAddMode();
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='form-wrap'>
        <input 
          type="text"
          className="todo-input"
          value={todo}
          onChange={inputChangeHandler}
          placeholder="할 일을 입력해주세요."
          maxLength="50"
          />
        <button className="add-btn" type="submit">
          {edit && edit.editMode ? "OK" : "ADD"}
        </button>
      </div>
    </form>
  )
}

export default Form
