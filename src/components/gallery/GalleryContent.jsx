import React, { useEffect, useState } from "react";
import Friends from "./Friends";
import Header from "../../layout/Header";
import AWS from "aws-sdk";
import domtoimage from "dom-to-image";
import smallTree from "../../assets/images/icons/smallTree_green.svg";
import axios from "axios";

import tree_1_1 from "../../assets/images/trees/greensmall.png";
import tree_1_2 from "../../assets/images/trees/greennormal.png";
import tree_1_3 from "../../assets/images/trees/greenbig.png";

import tree_2_1 from "../../assets/images/trees/yellowsmall.png";
import tree_2_2 from "../../assets/images/trees/yellownormal.png";
import tree_2_3 from "../../assets/images/trees/yellowbig.png";

import tree_3_1 from "../../assets/images/trees/pinksmall.png";
import tree_3_2 from "../../assets/images/trees/pinknormal.png";
import tree_3_3 from "../../assets/images/trees/pinkbig.png";

export default function GalleryContent() {
  const [currentTree, setCurrentTree] = useState();
  const [currentScore, setCurrentScore] = useState();
  const [treeToPaint, setTreeToPaint] = useState();

  useEffect(() => {
    if (currentTree) {
      if (currentTree.size === 1 && currentTree.color === 1) {
        setTreeToPaint(tree_1_1);
      }
      if (currentTree.size === 1 && currentTree.color === 2) {
        setTreeToPaint(tree_2_1);
      }
      if (currentTree.size === 1 && currentTree.color === 3) {
        setTreeToPaint(tree_3_1);
      }
      if (currentTree.size === 2 && currentTree.color === 1) {
        setTreeToPaint(tree_1_2);
      }
      if (currentTree.size === 2 && currentTree.color === 2) {
        setTreeToPaint(tree_2_2);
      }
      if (currentTree.size === 2 && currentTree.color === 3) {
        setTreeToPaint(tree_3_2);
      }
      if (currentTree.size === 3 && currentTree.color === 1) {
        setTreeToPaint(tree_1_3);
      }
      if (currentTree.size === 3 && currentTree.color === 2) {
        setTreeToPaint(tree_2_3);
      }
      if (currentTree.size === 3 && currentTree.color === 3) {
        setTreeToPaint(tree_3_3);
      }
    }
  }, [currentTree]);

  useEffect(() => {
    const tree = document.querySelector("#tree");
    tree.style.left = `${360}px`;
    tree.style.bottom = `${-30}px`;

    axios.get("http://www.cookie-server.shop:9000/trees/1").then((res) => {
      console.log(res.data.result.score);
      console.log(res.data.result.currentTree);
      setCurrentScore(res.data.result.score);
      setCurrentTree(res.data.result.currentTree);
    });

    // db에서 이미지 가져옴
    const uniquePlatform = document.querySelector("#uniquePlatform");
    axios
      .get(`https://${BUCKET}.s3.${REGION}.amazonaws.com/1_platform.png`)
      .then(() => {
        uniquePlatform.src = `https://${BUCKET}.s3.${REGION}.amazonaws.com/1_platform.png`;
      })
      .catch(() => {});
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
    domtoimage.toBlob(document.querySelector("#platform")).then((blob) => {
      handlePlatformUpload(blob);
    });
  };

  const handlePlatformUpload = (blob) => {
    const file = new File([blob], "platform.png");

    const s3 = new AWS.S3();
    const params = {
      Bucket: BUCKET,
      // 키값은 유저명_platform.png
      Key: "1_platform.png",
      Body: file,
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.log("오류", err);
      } else {
        console.log("성공", data);
        axios
          .post("http://www.cookie-server.shop:9000/current/1")
          .then((res) => {
            window.location.reload();
          });
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

      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const uniquePlatform = document.querySelector("#uniquePlatform");

      if (
        mouseX >= uniquePlatform.getBoundingClientRect().left &&
        mouseX <= uniquePlatform.getBoundingClientRect().right &&
        mouseY >= uniquePlatform.getBoundingClientRect().top &&
        mouseY <= uniquePlatform.getBoundingClientRect().bottom
      )
        capturePlatform();
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
        <div id="platform" className="m-auto relative w-full">
          <img
            src={require("../../assets/images/platform.png")}
            alt="platform"
            id="uniquePlatform"
            className="mx-auto"
          />

          <img
            src={treeToPaint && treeToPaint}
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
