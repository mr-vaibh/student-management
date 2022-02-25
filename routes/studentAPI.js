const express = require('express');
const router = express.Router();

const Student = require('../models/student');

router.get('/students', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Student.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.get('/students/:id', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Student.findById(req.params.id)
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/students', (req, res, next) => {
  if (req.body.name) {
    Student.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The Name input field is empty',
    });
  }
});

router.post('/students/:id', (req, res, next) => {
  Student.findByIdAndUpdate(req.params.id, req.body)
  .then((data) => res.json(data))
  .catch(next);
});

router.delete('/students/:id', (req, res, next) => {
  Student.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
