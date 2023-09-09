const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/keeperDB", {useNewUrlParser: true})
// .then(function(){
//     console.log("Successfully connected to mongoDB")
// })
// .catch(function(err){
//     console.log(err);
// })

const notesSchema = new mongoose.Schema({
    title: String,
    content: String,
});
// userId : {
//     type: mongoose.Schema.Types.ObjectId,
//     ref : 'User',
//     required : true
// }

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;