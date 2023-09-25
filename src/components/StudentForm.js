import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

function StudentForm() {
  const [studentData, setStudentData] = useState({
    rollNo: '',
    firstName: '',
    lastName: '',
    address: '',
    subjects: [],
    gender: 'Male',
    photoPath: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  return (
    <>
   
    <form onSubmit={handleSubmit}>
      <TextField
        name="rollNo"
        label="Roll No"
        value={studentData.rollNo}
        onChange={handleChange}
     
      />
     
      <button type="submit">Submit</button>
    </form>
    </>
  );
}


export default StudentForm;
