import { connect } from "@/dbconfig/connect";
import Comment from "@/models/commentModel";
import Post from "@/models/postModel";

export async function POST(request, response) {
  connect();

  const req = await request.json();

  const { comment, postID, user } = req;

  const newComment = await Comment.create({
    text: comment,
    post: postID,
    user: user.username,
  });

  await newComment.save();

  const postCommented = await Post.findById(postID);

  return Response.json({ success: true });
}
