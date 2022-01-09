const router = require('express').Router();
const { createNewNote, validateNotes } = require('../../lib/notes');
const { notes } = require('../../Develop/db/db');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    if (!validateNotes(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
    }
});

module.exports = router;
