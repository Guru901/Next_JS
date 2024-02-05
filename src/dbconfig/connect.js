import mongoose from "mongoose";

export const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("connected to mongodb");
    });

    connection.on("error", (err) => {
      console.log("not connected to mongo");
    });
  } catch (error) {
    console.log(error);
  }
};
