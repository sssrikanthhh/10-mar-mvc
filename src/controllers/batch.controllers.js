const router = require('express').Router();

const Batch = require('../models/batch.models');

router.post('/', async (req, res) => {
  try {
    const batch = await Batch.create(req.body);
    return res.status(201).send(batch);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;