import React from "react";
import friendGarden from "../../assets/images/friendGarden.png";
import { useNavigate } from "react-router-dom";

export default function FriendGardenContent() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="absolute w-6 h-6 left-[214px] top-11 cursor-pointer"
        onClick={() => {
          navigate("/gallery");
        }}
      ></button>
      <img src={friendGarden} />
    </div>
  );
}
