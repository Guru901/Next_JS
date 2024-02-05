"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // fetching posts from backend
        // setting loading to true so that user knows the request is sent
        setLoading(true);

        const { data } = await axios.get("/api/post/allPosts");
        setLoading(false);
        // loading set to false so that the content can render
        setPosts(data);
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
    <div className="flex flex-col justify-center items-center gap-5 p-6 pb-16">
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      ) : (
        posts.map((post) => (
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
                </div>
                <button class="btn btn-neutral">See more</button>
              </div>
            </>
          </div>
        ))
      )}
    </div>
  );
};

export default Feed;
