import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `The MongoDB connected!! DB HOST: ${connectionInstance.connection.name}`
    );
  } catch (error) {
    console.log("MongoDB connection failed!");
    process.exit(1);
  }
};
export default connectDB;
