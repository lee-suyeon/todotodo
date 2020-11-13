import { 
  TOGGLE_ADD_MODE,
  ADD_TASK,
  TOGGLE_CHECK_TASK,
  TOGGLE_EDIT_MODE,
  EDIT_TASK,
  TOGGLE_DELETE_MODE,
  DELETE_TASK,
  GET_DATE,
  MOVE_PAGE,
} from '../actions/index';
import moment from 'moment';

const initial = {
  addInput: false,
  todoList: [],
  delete: false,
  selected: {
    normal: moment().format('YYYY.MM.DD'),
    date: moment().format('MMM Do'),
    day: moment().format('dddd')
  },
  page: 'calendar',
}

const reducer = (state = initial, action) => {
  switch(action.type) {
    case TOGGLE_ADD_MODE: {
      return {
        ...state,
        addInput: !state.addInput,
      }
    }
    case ADD_TASK: {
      return {
        ...state,
        todoList: state.todoList.concat(action.payload),
      }
    }
    case TOGGLE_CHECK_TASK: {
      return {
        ...state,
        todoList: state.todoList.map(
          task => 
          task.id === action.id 
          ? { ...task, done: !task.done }
          : task
        )
      }
    }
    case TOGGLE_EDIT_MODE: {
      return {
        ...state,
        edit: {
          editMode: !state.editMode,
          index: action.index
        }
      }
    }
    case EDIT_TASK: {
      state.todoList[action.index].text = action.text;
      return {
        ...state,
        edit: {
          editMode: false,
        }
      }
    }
    case TOGGLE_DELETE_MODE: {
      return {
        ...state,
        delete: !state.delete
      }
    }
    case DELETE_TASK: {
      const newList = state.todoList.filter(
        todo => 
          todo.id !== action.id
      )
      return {
        ...state,
        todoList: newList
      }
    }
    case GET_DATE: {
      return {
        ...state,
        selected: {
          normal: action.normal,
          date: action.date,
          day: action.day
        }
      }
    }
    case MOVE_PAGE: {
      return {
        ...state,
        page: state.page === 'todoList' ? 'calendar' : 'todoList'
      }
    }
    default:
      return state;
  }
}

export default reducer;