import React, { useEffect } from "react";
import Friends from "./Friends";
import Header from "../../layout/Header";

export default function GalleryContent() {
  useEffect(() => {
    const contentHeight = document.querySelector("#contentHeight");
    const tree = document.querySelector("#tree");

    let active = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    function dragStart(e) {
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
      } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
      }

      if (e.target === tree) {
        active = true;
      }
    }

    function drag(e) {
      if (active) {
        e.preventDefault();

        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
        } else {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, tree);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }

    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;

      active = false;

      // db에 현재 이미지 업데이트(AWS)
      // 페이지 리로드 : 점수초기화 및 묘목으로 초기화
    }

    contentHeight.addEventListener("touchstart", dragStart, false);
    contentHeight.addEventListener("touchend", dragEnd, false);
    contentHeight.addEventListener("touchmove", drag, false);

    contentHeight.addEventListener("mousedown", dragStart, false);
    contentHeight.addEventListener("mouseup", dragEnd, false);
    contentHeight.addEventListener("mousemove", drag, false);
  }, []);

  return (
    <div className="w-full bg-[#C3E2B8]">
      <div className="flex flex-col mb-6">
        <Header />
        <img
          src={require("../../assets/images/platform.png")}
          alt="platform"
          id="platform"
        />
      </div>
      <Friends />
    </div>
  );
}
