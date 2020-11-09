import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAddMode } from '../actions/index';

function Header(props) {
  
  const dispatch = useDispatch();
  const selected = useSelector(state => state.selected);
  const addInput = useSelector(state => state.addInput);
  const [ title, setTitle ] = useState(false);

  useEffect(() => {
    if(addInput) {
      setTitle(true);
    } else {
      props.history.push('/')
    }
  }, [title, selected, addInput])

  console.log(title);
  //props.location.pathname === "/todolist"

  const onClickGoBack = () => {
    props.history.push('/');
    dispatch(toggleAddMode());
  }

  return (
    <div>
      {title && selected ?
        <div className="selected">
          <i className="icon-chevron-left" onClick={onClickGoBack}/>
          <span className="selected-day">{selected.day.toUpperCase()}, </span>
          <span className="selected-date">{selected.date}</span>
        </div> :
        <h1>TODO TODO</h1> 
      }
    </div>
  )
}

export default withRouter(Header);
