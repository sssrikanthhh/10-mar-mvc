const router = require('express').Router();

const User = require('../models/user.models');

router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;