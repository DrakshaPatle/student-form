
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const fs = require('fs');
const path = require('path');
const Student = require("./models/students");
const bodyParser = require('body-parser');
require('./db/config');
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
// Routes
const studentsRouter = require('./routes/students');
app.use('/students', studentsRouter);


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/students', (req, res) => {
    Student.find({})
        .then((students) => {
            res.json(students);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

app.get('/students/:rollNumber', (req, res) => {
    const rollNumber = req.params.rollNumber;
    Student.findOne({ rollNumber })
        .then((student) => {
            if (!student) {
                return res.status(404).json({ error: 'Student not found' });
            }
            res.json(student);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

app.put('/students/:rollNumber', (req, res) => {
    const rollNumber = req.params.rollNumber;
    const updatedData = req.body;

    Student.findOneAndUpdate({ rollNumber }, updatedData, { new: true })
        .then((student) => {
            if (!student) {
                return res.status(404).json({ error: 'Student not found' });
            }
            res.json(student);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

app.delete('/students/:rollNumber', (req, res) => {
    const rollNumber = req.params.rollNumber;

    Student.findOneAndDelete({ rollNumber })
        .then((student) => {
            if (!student) {
                return res.status(404).json({ error: 'Student not found' });
            }
            res.json({ message: 'Student deleted successfully' });
        })
        .catch((error) => {
            res.status(500).json({ error: 'Internal Server Error' });
        });
});


app.post('/students', async (req, res) => {
    try {

        let rollNo = req.body.rollNo;
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let address = req.body.address;
        let subjects = req.body.subjects;
        let gender = req.body.gender;
        let photoPath = req.body.photoPath;

        const student = new Student({
            rollNo,
            firstName,
            lastName,
            address,
            subjects,
            gender,
            photoPath,
        });

        await student.save();

        res.status(201).json(student);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "could not, error " });
    }
});


// this is for file uploading 
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fileSchema = new mongoose.Schema({
  filename: String,
  originalName: String,
  size: Number,
});

const File = mongoose.model('File', fileSchema);

app.post('/uploadFile', upload.single('file'), async (req, res) => {
  const { filename, originalname, size } = req.file;

  app.get('/api/files', (req, res) => {
    const directoryPath = path.join(__dirname, 'uploads');
  
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
        return res.status(500).json({ error: 'Failed to read directory' });
      }
  
      const fileData = files.map((filename) => {
        const filePath = path.join(directoryPath, filename);
        const fileStats = fs.statSync(filePath);
        return {
          filename,
          size: fileStats.size,
        };
      });
  
      res.json(fileData);
    });
  });
  
  
  try {
    const file = new File({
      filename,
      originalName: originalname,
      size,
    });

    await file.save();

    res.status(200).json({ message: 'File uploaded successfully' });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while uploading the file' });
  }
});

