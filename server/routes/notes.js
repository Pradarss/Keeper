const express = require('express');
const router = express.Router();
const Note = require('../models/note'); 


router.get('/notes/:UserId', (req, res) => {
  const UserId = req.params.UserId;
  // console.log(UserId)

  Note.find({userId : UserId})
    .then(function(foundNotes) {
      res.json(foundNotes);
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).json({ error: 'An error occurred while fetching notes' });
    });
});


router.post('/notes', (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    content: req.body.content,
    userId: req.body.userId
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