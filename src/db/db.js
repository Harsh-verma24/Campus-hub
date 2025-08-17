import mongoose from "mongoose"
import { DB_Name } from "../constants.js"

 async function ConnectDB () {
    try {
        const ConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
        console.log(`MongoDB connection established !! DB host :${ConnectionInstance.connection.host}`)
    } catch (error) {
        console.error(`MongoDB connection Error : ${error}`)
    }
}

export default ConnectDB