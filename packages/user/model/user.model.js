const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
   firstName:String,
   lastName:String,
   emailId:String
});

const UserModel = mongoose.model("user", UserSchema);
// user module export 
module.exports = UserModel;
