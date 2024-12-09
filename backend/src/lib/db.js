import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected: " + conn.connection.host);
    } catch (error) {
        console.error("Failed to connect: " + error);
        process.exit(1); // 1 for failure and 0 for success
    }
};
