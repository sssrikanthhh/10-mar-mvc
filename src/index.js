const express = require('express');

const connectDB = require('./configs/db');
const userController = require('./controllers/user.controllers');
const studentController = require('./controllers/student.controllers');
const batchController = require('./controllers/batch.controllers');
const evaluationController = require('./controllers/evaluation.controllers');
const submissionController = require('./controllers/submission.controllers');
const app = express();
const PORT = 8000;

app.use(express.json());
connectDB();

app.use('/users', userController);
app.use('/students', studentController);
app.use('/batch', batchController);
app.use('/evaluations', evaluationController);
app.use('/submissions', submissionController);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});