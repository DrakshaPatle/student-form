// StudentList.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStudents } from '../actions/studentActions';
import { Link } from 'react-router-dom';
import { deleteStudent } from '../actions/studentActions';

function StudentList() {
  const dispatch = useDispatch();

  const handleDelete = (rollNo) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      dispatch(deleteStudent(rollNo));
    }
  };
  const students = useSelector((state) => state.students);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const filteredStudents = students.filter((student) =>
    student.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredStudents.map((student) => (
        <div key={student.rollNo}>
          <Link to={`/students/edit/${student.rollNo}`}>Edit</Link>

          <button onClick={() => handleDelete(student.rollNo)}>Delete</button>

        </div>
      ))}
    </div>
  );
}

export default StudentList;
