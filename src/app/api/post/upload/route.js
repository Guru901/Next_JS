import Post from "@/models/postModel";
import { connect } from "mongoose";

export async function POST(request, response) {
  connect();

  const req = await request.json();

  const { title, body } = req;

  const newPost = await Post.create({
    title: title,
    body: body,
  });

  await newPost.save();

  return Response.json({ success: true });
}
