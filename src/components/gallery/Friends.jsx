import React from "react";
import Friend from "./Friend";


import Celeb1 from "../../assets/images/celeb_1.jpg";
import Celeb2 from "../../assets/images/celeb_2.jpg";
import Celeb3 from "../../assets/images/celeb_3.jpg";
import Celeb4 from "../../assets/images/celeb_4.jpg";
import Celeb5 from "../../assets/images/celeb_5.jpg";

export default function Friends() {
  return (
    <div className="bg-[#92A98A] w-full h-full rounded-2xl relative">
      <div className="absolute left-[10%] px-4 py-2 bg-white text-center text-sm rounded-3xl shadow-2xl -top-[18px]">
        친구 정원 랭킹
      </div>
      <div
        className="absolute right-[10%] rounded-full bg-white w-14 h-14 flex flex-col items-center py-2 shadow-2xl -top-[28px]"
        id="treeContainer"
      ></div>
      <div className="overflow-y-auto h-full pt-10 pb-[340px]" id="friendList">
        <Friend
          name={"장현석"}
          description={"나는 현석현석"}
          treeNum={1}
          id={"first"}
          profile={Celeb1}
        />
        <Friend
          name={"권태훈"}
          description={"나는 태훈태훈"}
          treeNum={2}
          id={"second"}
          profile={Celeb2}
        />
        <Friend
          name={"김효빈"}
          description={"나는 효빈효빈"}
          treeNum={3}
          id={"third"}
          profile={Celeb3}
        />
        <Friend
          name={"유종건"}
          description={"나는 종건종건"}
          treeNum={4}
          id={"fourth"}
          profile={Celeb4}
        />
        <Friend
          name={"이학준"}
          description={"나는 학준학준"}
          treeNum={4}
          id={"fifth"}
          profile={Celeb5}
        />
      </div>
    </div>
  );
}
