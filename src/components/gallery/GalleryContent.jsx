import React from "react";
import Friends from "./Friends";

export default function GalleryContent() {
  return (
    <div className="w-full bg-[#C3E2B8]">
      <div className="flex flex-col">
        {/* 헤더 + 농장 */}
        <img src={require("../../assets/images/platform.png")} alt="platform" />
      </div>
      <Friends />
    </div>
  );
}
