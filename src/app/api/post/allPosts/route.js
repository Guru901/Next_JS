import { connect } from "@/dbconfig/connect";
import Post from "@/models/postModel";

export async function GET(request) {
  try {
    // connecting to database
    connect();

    // finding all the posts
    const posts = await Post.find({});

    // sending the post to the frontend
    return Response.json(posts);
  } catch (e) {
    console.log(e);
    return Response.json({ msg: "an error occurred" });
  }
}
