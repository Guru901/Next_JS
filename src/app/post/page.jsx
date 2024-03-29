"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Upload = () => {
  const [form, setForm] = useState({});

  const router = useRouter();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/post/upload", form);

      if (data.success) {
        router.push("/feed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="w-screen h-screen flex flex-col items-center py-14 px-0 gap-8">
        <h1 className="text-xl">Share Your Memories</h1>
        <form
          className="flex flex-col gap-3 w-11/12 justify-center items-center text-start"
          onSubmit={handleSubmit}
        >
          <input
            onChange={handleChange}
            type="text"
            placeholder="Title..."
            name="title"
            className="input input-bordered w-full max-w-lg"
          />
          <textarea
            onChange={handleChange}
            name="body"
            className="textarea textarea-bordered h-40 max-w-lg w-full"
            placeholder="Body..."
          ></textarea>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-lg h-[2rem]"
            accept="image/*"
          />
          <h1 className="w-full max-w-lg">File is optional</h1>
          <button className="btn max-w-lg w-full" type="submit">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
