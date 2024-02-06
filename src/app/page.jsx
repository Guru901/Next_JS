"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Home = () => {
  const [form, setForm] = useState({}); // user's data
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [pswd, setPswd] = useState(""); // for checking if the password and confirm password match

  const avatarRef = useRef(); // avatar input
  const router = useRouter();

  const handleChange = (e) => {
    // Getting username and password in the form variable to send into backend
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const pswdCheck = () => {
    console.log(form.password.length);

    if (form.password.length < 6) {
      setError("Password must be atleast 6 characters");
      return false;
    }

    if (pswd !== form.password) {
      setError("Passwords don't match");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending request to backend for user's registeration
      // Setting the loading to true when the request is send
      setLoading(true);

      if (pswdCheck()) {
        const { data } = await axios.post("/api/user/register", form);

        // if everything's good send the user to /feed

        console.log(data);

        // if (data.success) {
        //   router.push("/feed");
        // } else {
        //   setError(data.msg);
        // }
      }

      // setLoading(false);
    } catch (error) {
      console.log(error.response.data);
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    // Adding avatar file to form variable
    setForm({
      ...form,
      file: e.target.files[0],
    });
  };

  const handleAvatar = () => {
    // when clicked on avatar file input is triggered
    avatarRef.current.click();
  };

  return (
    <div className="flex flex-col w-[100svw] h-[100svh] justify-evenly items-center px-5">
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <div className="flex justify-between">
            <h1 className="text-3xl">Register</h1>
          </div>
          <form
            className="flex flex-col w-full max-w-sm gap-3"
            onSubmit={handleSubmit}
            encType="mutlipart/form-data"
          >
            <input
              type="text"
              placeholder="Enter Your Username.."
              name="username"
              className="input input-bordered w-full"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Enter Your Password.."
              name="password"
              className="input input-bordered w-full"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Confirm Password.."
              name="confirmPassword"
              onChange={(e) => setPswd(e.target.value)}
              className="input input-bordered w-full"
            />

            <h1 className="text-sm cursor-pointer" onClick={handleAvatar}>
              Select Avatar
            </h1>
            <div className="flex flex-col text-xs gap-1">
              <h1>Remember you cant ever change the password</h1>
              <Link href={"/"} className="underline">
                Learn more
              </Link>
              <Link href={"/login"} className="underline">
                Already have an account?
              </Link>
              <h2 className="text-center text-[#ef4c53]">{error}</h2>
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
            <input
              type="file"
              className="hidden"
              name="file"
              ref={avatarRef}
              onChange={handleFileChange}
              accept="image/*"
            />
          </form>
        </>
      )}
    </div>
  );
};

export default Home;
