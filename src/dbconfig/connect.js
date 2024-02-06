import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/social_next");

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to MongoDB");
    });

    connection.on("error", (err) => {
      console.error("MongoDB connection error:", JSON.stringify(err));
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
