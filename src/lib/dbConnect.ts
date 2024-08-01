import mongoose from "mongoose";

const connection: { isConnected?: number} = {}

async function dbConnect(){
    if(connection.isConnected){
        return;
    }

    const db = await mongoose.connect(`mongodb+srv://tushargrover2004:${process.env.MONGO_PASSWORD}@cluster0.stjbinv.mongodb.net/users`!)

    connection.isConnected = db.connections[0].readyState

}

export default dbConnect