import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  toggleAddMode,
  addTask,
  toggleEditMode,
  editTask,
  toggleDeleteMode,
  deleteTask
} from '../actions/index';
import moment from 'moment';

import AddTodo from './AddTodo';
import Form from './Form';

function Footer() {

  const dispatch = useDispatch();
  const addInput = useSelector(state => state.addInput);
  const todoList = useSelector(state => state.todoList);
  const edit = useSelector(state => state.edit);
  const deleteMode = useSelector(state => state.delete);
  const date = useSelector(state => state.date)

  // 할일 추가
  const changeAddMode = () => dispatch(toggleAddMode());
  const onClickAddTask = (task, date) => dispatch(addTask(task, date));

  // 할일 수정
  const changeEditMode = index => dispatch(toggleEditMode(index));
  const onClickEditTask = (todo, index) => dispatch(editTask(todo, index))

  // 할일 삭제
  const changeDeleteMode = () => dispatch(toggleDeleteMode());
  const onClickDelete = id => dispatch(deleteTask(id));

  return (
    <div className="footer">
      {addInput ?
        <Form 
          todoList={todoList}
          edit={edit}
          changeAddMode={changeAddMode}
          onClickAddTask={onClickAddTask}
          changeEditMode={changeEditMode}
          onClickEditTask={onClickEditTask}
        /> :
        <AddTodo
          todoList={todoList}
          deleteMode={deleteMode}
          changeAddMode={changeAddMode}
          changeDeleteMode={changeDeleteMode}
          onClickDelete={onClickDelete}
        />
      }
    </div>
  )
}

export default Footer
