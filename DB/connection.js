import mongoose from "mongoose";


export const connectDB = async () => {
    return await mongoose
        .connect('mongodb://127.0.0.1:27017/assignment5')
        .then(() => {
            console.log("DB connection has been established successfuly");
        }).catch(err => {
            console.log({ message: "failed to connect DB", err });
        })
}