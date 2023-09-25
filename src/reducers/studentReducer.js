
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
        return {
            ...state,
            students: state.students.map((student) =>
              student.rollNo === action.payload.rollNo ? action.payload : student
            ),
          };
    case DELETE_STUDENT:
        return {
            ...state,
            students: state.students.map((student) =>
              student.rollNo === action.payload.rollNo ? action.payload : student
            ),
          };
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
