
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    rollNo: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    subjects: [
        {
            type: String,
            max: 7, 
        },
    ],
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Undisclosed'],
        required: true,
    },
    photoPath: {
        type: String,
    },
});


const Student = mongoose.model('Student', studentSchema);
module.exports = Student;