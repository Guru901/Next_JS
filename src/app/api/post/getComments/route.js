import Comment from "@/models/commentModel";

export async function POST(request) {
  const req = await request.json();

  const { postID } = req;

  const comments = await Comment.find({ post: postID });

  return Response.json(comments);
}
