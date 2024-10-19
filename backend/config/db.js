import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://muhammadhassan6948:Hassan78692@cluster0.t4eaf.mongodb.net/food-del').then(()=>console.log("DB CONNECTED"));
}