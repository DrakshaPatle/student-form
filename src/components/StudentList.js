
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function StudentList() {
  const students = useSelector((state) => state.students);

  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
   
//search
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
            {/* edit and delete butn  */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
