import React from "react";
import profileImage from "../../assets/images/profileImage.png";

export default function Friend({ name, description }) {
  return (
    <div className="w-[80%] h-24 mx-auto rounded-2xl bg-white mb-6 flex p-4">
      <img src={profileImage} alt="profile" className="mr-4" />
      <div className="flex flex-col justify-center">
        <span className="font-bold text-xl">{name}</span>
        <span className="opacity-40 text-sm mt-1">{description}</span>
      </div>
    </div>
  );
}
