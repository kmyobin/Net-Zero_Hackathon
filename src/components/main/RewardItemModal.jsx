import React from "react";

import Cancel from "../../assets/images/icons/cancel.svg";
import LevelUp from "../../assets/images/icons/levelup.svg";
import LevelUpTree from "../../assets/images/leveluptree.png";
import TreeIcon from "../../assets/images/notice_tree.png";

function RewardItemModal({ itemOpen, setItemOpen, setTreeOpen, isOverScore }) {
  const onClickCancel = () => {
    setItemOpen(!itemOpen);

    isOverScore ? setTreeOpen(true) : window.location.reload();
  };
  setTimeout(function () {
    const element = document.querySelector(".scale-0");
    if (element) {
      element.classList.remove("scale-0");
      element.classList.add("scale-100");
    }
  }, 100);
  return (
    <div className="absolute top-0 left-0 rounded-2xl w-full h-full z-10 bg-[rgba(0,0,0,0.4)]  flex justify-center items-center ">
      <div className="relative w-[80%] h-[40%] rounded-xl bg-white z-20 scale-0 transform transition-transform duration-1000">
        <img
          src={Cancel}
          alt="cancel"
          className="absolute right-3 top-3 cursor-pointer"
          onClick={onClickCancel}
        />

        <div className="">
          <div className="font-[1000] text-4xl mt-[15%] mb-[10%] flex justify-center items-center">
            축하합니다!
          </div>
          <div className="flex justify-center items-center">
            <div className="text-center rounded-full shadow-lg p-5 w-[70px] h-[70px] border-1 text-[#929292]">
              <img src={TreeIcon} alt="treeicon" className="" />
              <p className="pb-1 text-sm">+1</p>
            </div>
          </div>

          <div className="mt-[15%] flex justify-center items-center text-center">
            {sessionStorage.getItem("name")} 님의 정원에 심을 수 있는
            <br />
            새싹이 추가되었어요.
          </div>
          <div className="flex justify-center items-center"></div>
        </div>
      </div>
    </div>
  );
}

export default RewardItemModal;
