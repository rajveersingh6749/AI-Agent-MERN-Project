import mongoose from "mongoose";


function connect() {
    if (!process.env.MONGODB_URI) {
        console.log("MongoDB URI not configured - running without database");
        return;
    }

    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch(err => {
            console.log("MongoDB connection failed:", err.message);
            console.log("Running without database");
        })
}

export default connect;