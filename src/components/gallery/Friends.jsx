import React from "react";
import smallTree from "../../assets/images/icons/smallTree_green.svg";

export default function Friends() {
  return (
    <div className="bg-[#92A98A] w-full h-full rounded-2xl relative">
      <div className="absolute left-[10%] px-4 py-2 bg-white text-center text-sm rounded-3xl shadow-2xl -top-[18px]">
        친구 농장 방문
      </div>
      <div className="absolute right-[10%] rounded-full bg-white w-14 h-14 flex flex-col items-center py-2 shadow-2xl -top-[28px]">
        <img src={smallTree} alt="smallTree" width={"29px"} height={"24px"} />
        <span className="text-gray-400 -mt-1">3</span>
      </div>
    </div>
  );
}
