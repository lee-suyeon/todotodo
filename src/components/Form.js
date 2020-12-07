import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';

function Form({ todoList, selectedDate, edit, onClickAddTask, onClickEditTask }) {
  const [ todo, setTodo ] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()

    if(edit && edit.editMode) {
      setTodo(todoList[edit.index].text)
    }
  }, [edit])

  const inputChangeHandler = e => {
    setTodo(e.target.value);
  }

  const submitHandler = e => {
    e.preventDefault();
    
    if(todo == "") { // 할일 입력값이 없을 때,
      alert('할일을 입력해주세요')
    } else if (edit && edit.editMode) { // editMode일 때,
      onClickEditTask(todo, edit.index);
      setTodo("");
    } else { // 제출
      let date = selectedDate;
      onClickAddTask(todo, date);
      setTodo("");
      inputRef.current.focus();
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
          ref={inputRef}
          />
        <button className="add-btn" type="submit">
          {edit && edit.editMode ? "EDIT" : "ADD"}
        </button>
      </div>
    </form>
  )
}

export default Form
