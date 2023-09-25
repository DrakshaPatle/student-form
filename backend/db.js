const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

mongoose.connect('mongodb://localhost:27017/student-backend', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });