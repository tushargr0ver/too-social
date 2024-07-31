import { Schema } from "mongoose"
import mongoose from "mongoose"
import IUser from './IUser'


const userSchema:Schema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    name: { type: String},
    links: { type: Schema.Types.Mixed}
})

const User = mongoose.models.User || mongoose.model('Users', userSchema);

export default User

