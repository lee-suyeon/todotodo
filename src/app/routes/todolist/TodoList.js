
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TaskList from 'components/TaskList';
import NoTask from 'components/NoTask';

import {
  toggleAddMode,
  toggleCheckTask,
  toggleEditMode,
  toggleDeleteMode,
  deleteTask
  } from '../../../actions';

function TodoList() {
  const dispatch = useDispatch();
  
  const todoList = useSelector(state => state.todoList);
  const deleteMode = useSelector(state => state.delete);
  const selectedDate = useSelector(state => state.selected.normal);
  const edit = useSelector(state => state.edit)
  const [ todayList, setTodayList ] = useState([]);
  
  // 할일 추가
  const changeAddMode = () => dispatch(toggleAddMode());

  // 할일 수정
  const changeEditMode = index => dispatch(toggleEditMode(index));

  // 할일 삭제
  const changeDeleteMode = () => dispatch(toggleDeleteMode());
  const onClickDelete = id => dispatch(deleteTask(id));

  const changeTaskState = id => dispatch(toggleCheckTask(id));

  // 삭제 모드에서 task가 0이 되면 삭제 모드 종료
  useEffect(() => {
    if(deleteMode && todoList.length === 0){
      changeDeleteMode();
    }
  }, [todoList.length]);

  // 선택한 날짜에 맞는 todolist만 로드
  useEffect(() => {
    if(todoList || edit.editMode === false){
      setTodayList(todoList.filter(todo => todo.date.normal === selectedDate));
    }
  }, [todoList, edit])

  return (
    <div className="TodoList">
      <div className="template">
        <div className="content">
          {todoList && todoList.length > 0 ?
            <TaskList
              todoList={todayList}
              deleteMode={deleteMode}
              selectedDate={selectedDate}
              changeAddMode={changeAddMode}
              changeEditMode={changeEditMode}
              onClickDelete={onClickDelete}
              changeTaskState={changeTaskState}
            /> :
            <NoTask />
          }
        </div>
      </div>
    </div>
  );
}

export default TodoList;