// import mongoose from 'mongoose';
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const user = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: false,
  },
  isActive:{
    type: Boolean,
    required: false,
  },
  positionid:{
    type: Number,
    required: true,
  },
  departmentid:{
    type: Number,
    required: true,
  }
});
module.exports=  mongoose.model('User', user);
//export default mongoose.model('User', user);