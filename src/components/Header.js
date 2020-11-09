import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Header(props) {
  
  const selected = useSelector(state => state.selected);
  const addInput = useSelector(state => state.addInput);
  const [ title, setTitle ] = useState(false);

  useEffect(() => {
    if(selected && addInput) {
      setTitle(true);
    } else {
      props.history.push('/')
    }
  }, [title, selected, addInput])

  console.log(title);
  //props.location.pathname === "/todolist"

  return (
    <div>
      {title && selected ?
        <div className="selected">
          <span className="selected-day">{selected.day.toUpperCase()},</span>
          <span className="selected-date">{selected.date}</span>
        </div> :
        <h1>TODO TODO</h1> 
      }
    </div>
  )
}

export default withRouter(Header);
