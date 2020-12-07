import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getDate } from '../../../actions/index'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

function TodoCalendar() {
  const dispatch = useDispatch();
  const [ value, onChange ] = useState(new Date());
  const initDate = useRef();

  const onClickDay = value => {
    const normal = moment(value).format('YYYY.MM.DD');
    const date = moment(value).format('MMM Do');
    const day = moment(value).format('dddd');

    dispatch(getDate(normal, date, day));
  }

  // 선택 날짜 초기화
  useEffect(() => {
    initDate.current.onClickTile();
  }, [])

  return (
    <div className="todo-calendar">
      <Calendar 
        onChange={onChange}
        value={value}
        locale="en-us"
        onClickDay={onClickDay}
        ref={initDate}
      />
    </div>
  )
}

export default TodoCalendar
