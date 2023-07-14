import React from "react";
import Friends from "./Friends";
import Header from "../../layout/Header";

export default function GalleryContent() {
  return (
    <div className="w-full bg-[#C3E2B8]">
      <div className="flex flex-col mb-6">
        {/* 헤더 + 농장 */}
        <Header />
        <img src={require("../../assets/images/platform.png")} alt="platform" />
      </div>
      <Friends />
    </div>
  );
}
