import { Document } from "mongoose"

export default interface IUser extends Document {
    uid: string,
    name: string,
    links: { [key: number]: string }
}