
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TaskList from '../../../components/TaskList';
import NoTask from '../../../components/NoTask';

import {
  toggleAddMode,
  addTask,
  toggleEditMode,
  editTask,
  toggleDeleteMode,
  deleteTask
  } from '../../../actions';

function TodoList() {
  const dispatch = useDispatch();
  const addInput = useSelector(state => state.addInput);
  const todoList = useSelector(state => state.todoList);
  const deleteMode = useSelector(state => state.delete);
  const edit = useSelector(state => state.edit);

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
    <div className="TodoList">
      <div className="template">
        
        <div className="content">
          {todoList && todoList.length > 0 ?
            <TaskList 
              todoList={todoList}
              deleteMode={deleteMode}
              changeAddMode={changeAddMode}
              changeEditMode={changeEditMode}
              onClickDelete={onClickDelete}
            /> :
            <NoTask />
          }
        </div>

        {/* <div className="footer">
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
        </div> */}
      </div>
    </div>
  );
}

export default TodoList;
