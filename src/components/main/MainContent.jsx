import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import Sky from "../../assets/images/sky.png";
import ImageIcon from "../../assets/images/icons/Image.svg";
import SmallTree from "../../assets/images/icons/smallTree_green.svg";

function MainContent() {
  const navigate = useNavigate();
  const onClickImage = () => {
    navigate("gallery");
  };

  const onClickCamera = () => {};

  return (
    <div className="bg-[#68A67D] w-full h-full">
      <Header />
      <div className="">
        <div className="mt-[16%] flex justify-center items-center relative">
          <img src={Sky} alt="sky" width="70%" />
          <div className="flex justify-center items-center absolute bottom-[11.5%] font-bold text-4xl text-white">
            582
          </div>
          <div className="flex justify-center items-center absolute top-[14.5%] w-full h-full">
            <img src={SmallTree} alt="smalltree" width="20%" />
          </div>
        </div>

        <div className="mt-[15%] flex justify-center items-center">
          <div
            className="bg-white rounded-full p-5 shadow-2xl w-[70px] h-[70px] cursor-pointer"
            onClick={onClickCamera}
          ></div>
        </div>

        <div className="mt-[15%] flex justify-center items-center">
          <img
            src={ImageIcon}
            alt="imageicon"
            width={27}
            height={27}
            onClick={onClickImage}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
