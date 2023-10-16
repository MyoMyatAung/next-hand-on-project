import mongoose from "mongoose";

let isConnected = false; // track connection

export const connectDb = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("DB ALREADY CONNECTED");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("DB CONNECTED");
  } catch (error) {
    console.log(error);
  }
};
