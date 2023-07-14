import React from 'react'
import Cancel from "../../assets/images/icons/cancel.svg";
import LevelUp from "../../assets/images/icons/levelup.svg"
import LevelUpTree from "../../assets/images/leveluptree.png"
import TreeIcon from "../../assets/images/notice_tree.png"

function RewardTreeModal({ treeOpen, setTreeOpen }) {
  const onClickCancel = () => {
    setTreeOpen(!treeOpen);
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
      <div className="relative w-[80%] h-[65%] rounded-xl bg-white z-20 scale-0 transform transition-transform duration-1000">
        <img
          src={Cancel}
          alt="cancel"
          className="absolute right-3 top-3 cursor-pointer"
          onClick={onClickCancel}
        />

        <div className="">
          <div className="font-[1000] text-4xl my-[15%] flex justify-center items-center">
            축하합니다!
          </div>
          <div className="flex justify-center items-center relative">
            <img
              src={LevelUp}
              alt="levelup"
              className="flex justify-center items-center w-[70%]"
            />
            <img
              src={LevelUpTree}
              alt="levelupTree"
              className="absolute bottom-[20%] w-[30%]"
            />
          </div>
          <div className="my-[8%] flex justify-center items-center text-center">
            {sessionStorage.getItem("name")} 님이 정성껏 쌓아주신 포인트가 <br />
            실제 나무를 심는데 사용되었어요.
          </div>
        </div>
      </div>
    </div>
  );
}

export default RewardTreeModal;
