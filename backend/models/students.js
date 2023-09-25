// models/student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  rollNo: String,
  firstName: String,
  lastName: String,
  address: String,
  subjects: [String],
  gender: String,
  photoPath: String,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
