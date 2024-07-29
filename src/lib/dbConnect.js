import mongoose from "mongoose";
const connection = {}
async function dbConnect(){
try {
    
        if(connection.isConnected){
            return;
        }
    
        const db = await mongoose.connect(process.env.MONGODB_URI)
        connection.isConnected = db.connections[0].readyState
        console.log("DB connected");
        
    }
 catch (error) {
    console.log("DB not connected", error);
}
}


export default dbConnect