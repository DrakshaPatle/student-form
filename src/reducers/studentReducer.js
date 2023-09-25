
import { ADD_STUDENT, EDIT_STUDENT, DELETE_STUDENT ,FETCH_STUDENTS_SUCCESS } from '../actions/studentActions';

const initialState = {
  students: [],
};

function studentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case EDIT_STUDENT:
      //  edit logic 
    case DELETE_STUDENT:
      //  delete logic
      case FETCH_STUDENTS_SUCCESS:
        return {
          ...state,
          students: action.payload,
        };
    default:
      return state;
  }
}

export default studentReducer;
