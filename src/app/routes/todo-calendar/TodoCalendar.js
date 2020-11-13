import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDate } from '../../../actions/index'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';



function TodoCalendar() {

  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todoList);
  const selectedDate = useSelector(state => state.selected.normal);
  const [ value, onChange ] = useState(new Date());

  const onClickDay = value => {
    const normal = moment(value).format('YYYY.MM.DD');
    const date = moment(value).format('MMM Do');
    const day = moment(value).format('dddd');

    dispatch(getDate(normal, date, day));
  }

  return (
    <div className="todo-calendar">
      <Calendar 
        onChange={onChange}
        value={value}
        locale="en-us"
        onClickDay={onClickDay}
      />
    </div>
  )
}

export default TodoCalendar
