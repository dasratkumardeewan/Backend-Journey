import mongoose from "mongoose";
// import dotenv from "dotenv";
import express from "express";
// dotenv.config({ path: "./.env" });

import connectDB from "./db/index.js";
connectDB();

// const app = express()(
//   // app.get("/",(req,res)=>{
//   //     res.send("Hello World")
//   // })

//   async () => {
//     try {
//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//       app.on("error", (error) => {
//         console.log("Error: ", error);
//         throw error;
//       });

//       app.listen(process.env.PORT || 3000, () => {
//         console.log("The app is listening on ", process.env.PORT || 3000);
//       });
//     } catch (error) {
//       console.error("Error: ", error);
//       throw error;
//     }
//   }
// )();
