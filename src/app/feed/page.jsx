"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

import Link from "next/link";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // fetching posts from backend
        // setting loading to true so that user knows the request is sent
        setLoading(true);

        const { data } = await axios.get("/api/post/allPosts");
        setLoading(false);
        // loading set to false so that the content can render
        setPosts(data.reverse());
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return <div>An error occurred</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 p-6 pb-16 w-screen">
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      ) : (
        posts.map((post) =>
          post.image ? (
            <div
              key={post._id}
              className="card max-w-96 bg-base-100 shadow-xl w-screen"
            >
              <>
                <figure>
                  <img src={post.image} alt={post.title} />
                </figure>
                <div className="card-body gap-1 p-4 flex-row justify-between">
                  <div>
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.body}</p>
                    <div className="flex gap-2 text-xl">
                      {liked ? (
                        <AiFillLike size={24} />
                      ) : (
                        <AiOutlineLike size={24} />
                      )}
                      <AiOutlineDislike />
                    </div>
                  </div>
                  <Link href={`/post/${post._id}`}>
                    <button className="btn btn-neutral">See more</button>
                  </Link>
                </div>
              </>
            </div>
          ) : (
            <div className="card w-96 bg-base-100 shadow-xl" key={post._id}>
              <div className="card-body flex flex-col justify-between items-stretch p-4">
                <div className="flex flex-col gap-2">
                  <h2 className="card-title text-white">
                    Author - {post.username ? post.username : "User"}
                  </h2>
                  <h2 className="card-title">{post.title}</h2>
                  <p>{post.body}</p>
                </div>

                <div className="card-actions justify-between items-center">
                  <div className="flex gap-2">
                    <button onClick={(prev) => setLiked(!prev)}>
                      {liked ? (
                        <>
                          <AiFillLike size={24} />
                          <h1 className="text-xs">12</h1>
                        </>
                      ) : (
                        <>
                          <AiOutlineLike size={24} />
                          <h1 className="text-xs">12</h1>
                        </>
                      )}
                    </button>
                    <button>
                      <AiOutlineDislike size={24} />
                      <h1 className="text-xs">12</h1>
                    </button>
                  </div>
                  <Link href={`/post/${post._id}`}>
                    <button className="btn btn-neutral">See more</button>
                  </Link>
                </div>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
};

export default Feed;
