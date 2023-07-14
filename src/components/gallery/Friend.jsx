import React from "react";
import profileImage from "../../assets/images/profileImage.png";
import twoTrees from "../../assets/images/trees/twoTrees.png";
import fourTrees from "../../assets/images/trees/fourTrees.png";
import greennormal from "../../assets/images/trees/greennormal.png";
import greensmall from "../../assets/images/trees/greensmall.png";
import { useNavigate } from "react-router-dom";

export default function Friend({ name, description, treeNum, id, profile }) {
  const navigate = useNavigate();
  return (
    <div
      className="w-[80%] h-24 mx-auto rounded-2xl bg-white mb-6 flex p-4 relative overflow-hidden cursor-pointer"
      onClick={() => {
        navigate("/friendGarden");
      }}
    >
      <div
        className="bg-white absolute top-[30px] left-[130px] w-28 cursor-pointer text-center px-2 py-1 rounded-2xl border-2 border-sky-800 hidden z-20"
        id={id}
      >
        방문하기
      </div>
      <div
        className="w-full h-full absolute bg-black opacity-0 top-0 left-0 hover:opacity-40 z-10"
        onMouseEnter={() => {
          const visit = document.querySelector(`#${id}`);
          visit.style.display = "block";
        }}
        onMouseLeave={() => {
          const visit = document.querySelector(`#${id}`);
          visit.style.display = "none";
        }}
      ></div>
      {treeNum === 1 && (
        <img
          src={fourTrees}
          alt="fourTrees"
          className="absolute w-24 -bottom-2 right-4"
        />
      )}
      {treeNum === 2 && (
        <img
          src={twoTrees}
          alt="twoTrees"
          className="absolute w-12 -bottom-2 right-4"
        />
      )}
      {treeNum === 3 && (
        <img
          src={greennormal}
          alt="greennormal"
          className="absolute w-12 bottom-0 right-4"
        />
      )}
      {treeNum === 4 && (
        <img
          src={greensmall}
          alt="greensmall"
          className="absolute w-12 bottom-0 right-4"
        />
      )}
      <img src={profile} alt="profile" className="mr-4 rounded-xl" />
      <div className="flex flex-col justify-center">
        <span className="font-bold text-xl">{name}</span>
        <span className="opacity-40 text-sm mt-1">{description}</span>
      </div>
    </div>
  );
}
