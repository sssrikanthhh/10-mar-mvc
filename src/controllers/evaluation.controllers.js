const router = require('express').Router();

const Evaluation = require('../models/evaluation.models');

router.post('/', async (req, res) => {
  try {
    const evaluation = await Evaluation.create(req.body);
    return res.status(201).send(evaluation);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;