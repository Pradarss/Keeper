const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/keeperUserDB", {useNewUrlParser: true})
// .then(function(){
//     console.log("Successfully connected to mongoDB")
// })
// .catch(function(err){
//     console.log(err);
// })

const userSchema = mongoose.Schema({
    email: String,
    password: String
})

User = mongoose.model('User',userSchema);

module.exports = User;