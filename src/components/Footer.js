import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  toggleAddMode,
  addTask,
  toggleEditMode,
  editTask,
  toggleDeleteMode,
  deleteTask,
  movePage,
} from '../actions/index';

import AddTodo from './AddTodo';
import Form from './Form';

function Footer() {

  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todoList);
  const edit = useSelector(state => state.edit);
  const deleteMode = useSelector(state => state.delete);
  const date = useSelector(state => state.selected)
  const page = useSelector(state => state.page);
  const selectedDate = useSelector(state => state.selected.normal);

  // 할일 추가
  const changeAddMode = () => dispatch(toggleAddMode());
  const onClickAddTask = (task, date) => dispatch(addTask(task, date));

  // 할일 수정
  const changeEditMode = index => dispatch(toggleEditMode(index));
  const onClickEditTask = (todo, index) => dispatch(editTask(todo, index))

  // 할일 삭제
  const changeDeleteMode = () => dispatch(toggleDeleteMode());
  const onClickDelete = id => dispatch(deleteTask(id));

  // page 이동
  const onClickMove = () => dispatch(movePage());


  return (
    <div className="footer">
      {page === 'calendar' ?
        <AddTodo
          todoList={todoList}
          deleteMode={deleteMode}
          changeAddMode={changeAddMode}
          changeDeleteMode={changeDeleteMode}
          onClickDelete={onClickDelete}
          onClickMove={onClickMove}
          selectedDate={selectedDate}
        /> :
        <Form 
          todoList={todoList}
          edit={edit}
          date={date}
          changeAddMode={changeAddMode}
          onClickAddTask={onClickAddTask}
          changeEditMode={changeEditMode}
          onClickEditTask={onClickEditTask}
        />
      }
    </div>
  )
}

export default Footer
