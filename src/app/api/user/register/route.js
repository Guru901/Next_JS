import { connect } from "@/dbconfig/connect";
import User from "@/models/userModel";

export async function POST(request) {
  try {
    // connecting to database
    connect();

    // getting user's details from database
    const req = await request.json();
    const { username, password } = req;

    // checking if the username is already taken
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      return Response.json({ success: false, msg: "Username already taken" });
    }

    // creating and saving the user
    const newUser = await User.create({
      username: username,
      password: password,
    });
    await newUser.save();

    return Response.json({ success: true, msg: "user created" });
  } catch (error) {
    return Response.json({ success: false, msg: "Something went wrong" });
  }
}
