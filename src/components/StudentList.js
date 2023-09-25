
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { editStudent, deleteStudent } from '../actions/studentActions';
function StudentList() {
  const students = useSelector((state) => state.students);

  const [searchText, setSearchText] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);
  const handleSearch = () => {

    const filteredStudents = students.filter((student) => {
        const fullName = `${student.firstName} ${student.lastName}`;
        return fullName.toLowerCase().includes(searchText.toLowerCase());
      });
      setFilteredStudents(filteredStudents);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {students.map((student) => (
          <li key={student.rollNo}>
            {student.firstName} {student.lastName}
            <button onClick={() => handleEditClick(student)}>Edit</button>
            <button onClick={() => handleDeleteClick(student.rollNo)}>Delete</button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
