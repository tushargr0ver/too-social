
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    uid:{
        type:String,
        required:true,
        unique:true
    },
  name: {
    type: String,
    required: true,
  },
  links: {
    type: mongoose.Schema.Types.Mixed
  }
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
