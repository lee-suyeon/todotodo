import { 
  TOGGLE_ADD_MODE,
  ADD_TASK,
  TOGGLE_EDIT_MODE,
  EDIT_TASK,
  TOGGLE_DELETE_MODE,
  DELETE_TASK,
  GET_DATE,
} from '../actions/index';
import moment from 'moment';

const initial = {
  addInput: false,
  todoList: [],
  delete: false,
  selected: {
    date: moment().format('MMM Do'),
    day: moment().format('dddd')
  }
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
          date: action.date,
          day: action.day
        }
      }
    }
    default:
      return state;
  }
}

export default reducer;