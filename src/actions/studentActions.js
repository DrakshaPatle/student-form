export const ADD_STUDENT = 'ADD_STUDENT';
export const EDIT_STUDENT = 'EDIT_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export function addStudent(student) {
  return { type: ADD_STUDENT, payload: student };
}

export function editStudent(student) {
  return { type: EDIT_STUDENT, payload: student };
}

export function deleteStudent(rollNo) {
  return { type: DELETE_STUDENT, payload: rollNo };
}

export const fetchStudentsSuccess = (students) => ({
    type: FETCH_STUDENTS_SUCCESS,
    payload: students,
  });
  

  export const fetchStudents = () => {
    return async (dispatch) => {
      try {
        //API request to fetch students from the backend
        const response = await fetch('http://localhost:5000/students'); 
        const students = await response.json();
  
        dispatch(fetchStudentsSuccess(students));
      } catch (error) {
       
      }
    };
  };