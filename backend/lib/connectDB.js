import mongoose from "mongoose";

const connectDB = async () => {
    try {
       await mongoose.connect(process.env.MONGO);
       console.log("MongoDB Connected!");
    } catch (e) {
        console.error(e);
    }
}

export default connectDB;