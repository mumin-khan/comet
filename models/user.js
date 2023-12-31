const mongoose = require('mongoose')
userSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true,
    minlength:3,
    },
  email: {
    type:String,
    required:true,
    unique:true
    },
  password:{ 
    type:String,
    required:true,
    },
    role:
    {
        type:String,
        required:true
    }

});

module.exports = mongoose.model('User',userSchema)