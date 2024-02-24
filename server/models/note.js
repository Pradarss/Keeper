const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    title: String,
    content: String,
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
});

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;