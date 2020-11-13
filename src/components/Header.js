import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAddMode, movePage, toggleDeleteMode } from '../actions/index';

function Header(props) {
  
  const dispatch = useDispatch();
  const selected = useSelector(state => state.selected);
  const addInput = useSelector(state => state.addInput);
  const [ title, setTitle ] = useState(false);
  const todoList = useSelector(state => state.todoList);

  const onClickDelete = () => {
    dispatch(toggleDeleteMode());
  }

  const onClickGoBack = () => {
    props.history.push('/');
    dispatch(toggleAddMode());
    dispatch(movePage());
  }

  return (
    <div>
      {props.location.pathname === "/todolist" ?
        <div className="selected">
          <i className="icon-chevron-left" onClick={onClickGoBack}/>
          <span className="selected-day">{selected.day.toUpperCase()}, </span>
          <span className="selected-date">{selected.date}</span>
          {todoList && todoList.length > 0 &&
            <i className="icon-delete" onClick={onClickDelete} />}
        </div> :
        <h1>TODO TODO</h1> 
      }
    </div>
  )
}

export default withRouter(Header);
