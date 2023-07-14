import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import Sky from "../../assets/images/sky.png";
import ImageIcon from "../../assets/images/icons/Image.svg";

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
        <div className="mt-36 flex justify-center items-center relative">
          <img src={Sky} alt="sky" width={380} height={380} />
          <div className="flex justify-center items-center absolute bottom-10 font-bold text-4xl text-white">
            582
          </div>
        </div>

        <div className="mt-20 flex justify-center items-center">
          <div
            className="bg-white rounded-full p-5 shadow-2xl w-[70px] h-[70px] cursor-pointer"
            onClick={onClickCamera}
          ></div>
        </div>

        <div className="mt-20 flex justify-center items-center">
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
