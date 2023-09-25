import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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
    <form onSubmit={handleSubmit}>
      <TextField
        name="rollNo"
        label="Roll No"
        value={studentData.rollNo}
        onChange={handleChange}
        required
      />
      <TextField
        name="firstName"
        label="First Name"
        value={studentData.firstName}
        onChange={handleChange}
        required
      />
      <TextField
        name="lastName"
        label="Last Name"
        value={studentData.lastName}
        onChange={handleChange}
        required
      />
      <TextField
        name="address"
        label="Address"
        value={studentData.address}
        onChange={handleChange}
        multiline
        rows={4}
        required
      />
      <div>
        Subjects:
        <button>Add Subject</button>
        {studentData.subjects.map((subject, index) => (
          <div key={index}>
            <TextField
              name={`subjects[${index}]`}
              value={subject}
              onChange={handleChange}
            />
            <button>Delete</button>
          </div>
        ))}
      </div>
      <div>
        Gender:
        <Select
          name="gender"
          value={studentData.gender}
          onChange={handleChange}
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Undisclosed">Undisclosed</MenuItem>
        </Select>
      </div>
      <TextField
        name="photoPath"
        label="Photo"
        value={studentData.photoPath}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default StudentForm;
