const router = require('express').Router();

const { path } = require('express/lib/application');
const Student = require('../models/student.models');

router.post('/', async (req, res) => {
  try {
    const student = await Student.create(req.body);
    return res.status(201).send(student);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// fetching students who gave particular evaluation

router.get('/:evaluationId', async (req, res) => {
  try {
    const students = Student.find({ evaluationId: req.params.evaluationId }).lean().exec();
    return res.status(201).send(students);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// getting the student with highest marks

router.get('/', async (req, res) => {
  try {
    const student = Student.find({})
      .populate({
        path: "userId",
      })
      .sort({
        marks: -1
      })
      .limit(1);
    return res.status(201).send(student);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;