import dbConnect from "@/lib/dbConnect"
import User from "@/app/models/User"
import IUser from "@/app/models/IUser"



async function getData(uid: string){
    try {
        await dbConnect()
        const userData: IUser | null = await User.findOne({ uid: uid }).exec()
        return userData
    } catch (error) {
        console.error("Error fetching user data:", error)
        return null
    }

}

export default getData