const express = require('express');
const router = express.Router();
const Note = require('../models/note'); 


router.get('/notes', (req, res) => {
  Note.find({})
    .then((foundNotes) => {
      res.json(foundNotes);
    })
    .catch((err) => {
      console.log(err);
    });
});


router.post('/notes', (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    content: req.body.content,
  });

  newNote
    .save()
    .then((savedNote) => {
      console.log('Note saved successfully');
      res.json(savedNote);
    })
    .catch((err) => {
      console.log(err);
    });
});


router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  Note.deleteOne({ _id: noteId })
    .then(() => {
      res.status(200).send();
      console.log('Successfully deleted');
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;