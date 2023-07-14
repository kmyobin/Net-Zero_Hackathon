import React, { useEffect } from "react";
import Friends from "./Friends";
import Header from "../../layout/Header";
import AWS from "aws-sdk";
import html2canvas from "html2canvas";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import smallTree from "../../assets/images/icons/smallTree_green.svg";

export default function GalleryContent() {
  // treeContainer와 platform 사이의 거리 구하기
  useEffect(() => {
    const treeContainer = document.querySelector("#treeContainer");
    const platform = document.querySelector("#platform");

    const moveX =
      treeContainer.getBoundingClientRect().x -
      platform.getBoundingClientRect().x;
    const moveY =
      treeContainer.getBoundingClientRect().y -
      platform.getBoundingClientRect().y;

    console.log(moveX);
    console.log(moveY);

    const tree = document.querySelector("#tree");
    tree.style.left = `${342}px`;
    tree.style.bottom = `${-30}px`;
  }, []);

  // AWS 서비스 이용
  const REGION = process.env.REACT_APP_AWS_REGION;
  const ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY;
  const SECRET_KEY = process.env.REACT_APP_AWS_SECRET_KEY;
  const BUCKET = process.env.REACT_APP_AWS_BUCKET;

  AWS.config.update({
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY,
  });

  const capturePlatform = () => {
    // html2canvas(document.querySelector("#platform")).then((canvas) => {
    //   document.body.appendChild(canvas);
    // });
    domtoimage.toBlob(document.querySelector("#platform")).then((blob) => {
      // document.body.appendChild(blob);
      // saveAs(blob, "card.png");
    });
  };

  const handlePlatformUpload = () => {
    const s3 = new AWS.S3();
    const params = {
      Bucket: BUCKET,
      Key: "ㅎㅇ",
      Body: "ㅎㅇ",
    };

    let pic_url;
    s3.upload(params, (err, data) => {
      if (err) {
        console.log("오류", err);
      } else {
        console.log("성공", data);
        pic_url = data.Location;
      }
    });
  };

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
      // 현재 img 구역 캡쳐.
      capturePlatform();

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
        <div id="platform" className="m-auto relative">
          <img
            src={require("../../assets/images/platform.png")}
            alt="platform"
          />
          {/* <div className="w-10 h-10 absolute bg-red-700 top-32 left-44"></div> */}
          <img
            src={smallTree}
            alt="smallTree"
            width={"29px"}
            height={"24px"}
            className="transition-all hover:scale-125 absolute bottom-0 left-0 z-10"
            id="tree"
          />
        </div>
      </div>
      <Friends />
    </div>
  );
}
