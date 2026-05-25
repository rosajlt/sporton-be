//koneksi monggoDB
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app"

dotenv.config();

const PORT = process.env.PORT || "5001";
const MONGODB_URI = process.env.MONGODB_URI || "no-mongo-uri";

mongoose
    .connect(MONGODB_URI)
    .then(() => { 
        console.log ("Connected to MongoDB");   
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => console.error("error connecting to MongoDB:", error));
