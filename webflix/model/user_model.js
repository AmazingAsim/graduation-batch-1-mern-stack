let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    user_name:{type:String,required:true},
    user_email:{type:String,required:true},
    user_password:{type:String,required:true},
    user_profile:{type:String,required:false},
    user_role:{type:String,required:true}
})

let userModel = require('users',userSchema);

module.exports = userModel;