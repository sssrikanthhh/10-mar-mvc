const router = require('express').Router();

const Submission = require('../models/submission.models');

router.post('/', async (req, res) => {
  try {
    const submission = await Submission.create(req.body);
    return res.status(201).send(submission);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;