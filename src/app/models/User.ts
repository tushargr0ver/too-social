import { Schema } from "mongoose"
import mongoose from "mongoose"


const userSchema:Schema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    name: { type: String},
    links: { type: Schema.Types.Mixed}
})

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User

