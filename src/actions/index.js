export const TOGGLE_ADD_MODE = 'TOGGLE_ADD_MODE';
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_CHECK_TASK = 'TOGGLE_CHECK_TASK';

export const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';
export const EDIT_TASK = 'EDIT_TASK';
export const TOGGLE_DELETE_MODE = 'TOGGLE_DELETE_MODE';
export const DELETE_TASK = 'DELETE_TASK';

export const GET_DATE = 'GET_DATE';
export const MOVE_PAGE = 'MOVE_PAGE';

// TASK 추가 FORM 토글
export const toggleAddMode = () => {
  return {
    type: TOGGLE_ADD_MODE,
  };
};

// 할일 목록 리스트 순서
let nextId = 0;
export const addTask = (text, date, time) => {
  return {
    type: ADD_TASK,
    payload: {
      id: nextId++,
      text,
      date,
      done: false,
    }
  };
};

// 할 일 체크
export const toggleCheckTask = (id) => {
  return {
    type: TOGGLE_CHECK_TASK,
    id,
  }
}

// TASK 수정 아이콘 클릭
export const toggleEditMode = index => {
  return {
    type: TOGGLE_EDIT_MODE,
    index,
  }
}

// TASK 수정 완료
export const editTask = (text, index) => {
  return {
    type: EDIT_TASK,
    text,
    index,
  }
}

// TASK 모드 토글
export const toggleDeleteMode = () => {
  return {
    type: TOGGLE_DELETE_MODE,
  }
}

// TASK 삭제
export const deleteTask = id => {
  return {
    type: DELETE_TASK,
    id,
  }
}

// 달력의 클릭한 DATE 가져오기
export const getDate = (normal, date, day) => {
  return {
    type: GET_DATE,
    normal,
    date,
    day,
  }
}

// 페이지 이동
export const movePage = () => {
  return {
    type: MOVE_PAGE,
  }
}