import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDate } from '../../../actions/index'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';


function TodoCalendar() {

  const dispatch = useDispatch();
  const [ value, onChange ] = useState(new Date());

  const onClickDay = value => {
    const date = moment(value).format('MMM Do');
    const day = moment(value).format('dddd');
    dispatch(getDate(date, day));
  }

  return (
    <Calendar 
      onChange={onChange}
      value={value}
      locale="en-us"
      onClickDay={onClickDay}
    />
  )
}

export default TodoCalendar
