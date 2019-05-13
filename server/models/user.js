import mongoose from 'mongoose';
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
});
export default mongoose.model('User', user);