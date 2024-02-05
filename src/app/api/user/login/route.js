import { connect } from "@/dbconfig/connect";
import User from "@/models/userModel";

export async function POST(request) {
  try {
    // connecting to the database
    connect();

    // getting username and password from request
    const req = await request.json();
    const { username, password } = req;

    // checking if the user exists
    const user = await User.findOne({ username: username });
    if (!user) {
      return Response.json({ success: false, msg: "User doesn't exists" });
    }

    // checking the password
    if (user.password === password) {
      return Response.json({ success: true, msg: "Login" });
    }

    return Response.json({ success: false, msg: "Incorrect Credentials" });
  } catch (error) {
    conosle.log(error);
    return Response.json({
      success: false,
      msg: "an error occurred",
    });
  }
}
