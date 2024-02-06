"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { UserContext } from "../Context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-col gap-8 w-screen min-h-screen">
      <div className="flex justify-between p-3 px-5 items-center">
        <Link href={"/feed"}>
          <button>
            <FaArrowLeft size={24} />
          </button>
        </Link>
        <button className="btn">Logout</button>
      </div>
      <div className="flex gap-8 items-center px-8">
        <div className="w-32 h-32 rounded-full bg-[#A6ADBB]"></div>
        <h1 className="text-xl">{user.username}</h1>
      </div>
      <div className="divider m-0"></div>

      <div className="flex flex-wrap justify-center items-center gap-3">
        <div className="w-32 h-52">
          <img
            className="object-cover w-full h-full"
            src="https://res.cloudinary.com/djna5slqw/image/upload/v1706962472/veqnfahhfwbhccrekzag.png"
            alt=""
          />
        </div>
        <div className="w-32 h-52">
          <img
            className="object-cover w-full h-full"
            src="https://res.cloudinary.com/djna5slqw/image/upload/v1706962472/veqnfahhfwbhccrekzag.png"
            alt=""
          />
        </div>
        <div className="w-32 h-52">
          <img
            className="object-cover w-full h-full"
            src="https://res.cloudinary.com/djna5slqw/image/upload/v1706962472/veqnfahhfwbhccrekzag.png"
            alt=""
          />
        </div>
        <div className="w-32 h-52">
          <img
            className="object-cover w-full h-full"
            src="https://res.cloudinary.com/djna5slqw/image/upload/v1706962472/veqnfahhfwbhccrekzag.png"
            alt=""
          />
        </div>
        <div className="w-32 h-52">
          <img
            className="object-cover w-full h-full"
            src="https://res.cloudinary.com/djna5slqw/image/upload/v1706962472/veqnfahhfwbhccrekzag.png"
            alt=""
          />
        </div>
        <div className="w-32 h-52">
          <img
            className="object-cover w-full h-full"
            src="https://res.cloudinary.com/djna5slqw/image/upload/v1706962472/veqnfahhfwbhccrekzag.png"
            alt=""
          />
        </div>
        <div className="w-32 h-52">
          <img
            className="object-cover w-full h-full"
            src="https://res.cloudinary.com/djna5slqw/image/upload/v1706962472/veqnfahhfwbhccrekzag.png"
            alt=""
          />
        </div>
        <div className="w-32 h-52">
          <img
            className="object-cover w-full h-full"
            src="https://res.cloudinary.com/djna5slqw/image/upload/v1706962472/veqnfahhfwbhccrekzag.png"
            alt=""
          />
        </div>
        <div className="w-32 h-52">
          <img
            className="object-cover w-full h-full"
            src="https://res.cloudinary.com/djna5slqw/image/upload/v1706962472/veqnfahhfwbhccrekzag.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
