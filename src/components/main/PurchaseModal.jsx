import React from 'react'
import Cancel from "../../assets/images/icons/cancel.svg"
import Tree1 from "../../assets/images/icons/tree_1.svg"
import Tree2 from "../../assets/images/icons/tree_2.svg"
import Tree3 from "../../assets/images/icons/tree_3.svg";

function PurchaseModal({ purchaseOpen, setPurchaseOpen, getScore }) {
  const onClickCancel = () => {
    setPurchaseOpen(!purchaseOpen);
    getScore(8);
  };
  setTimeout(function () {
    const element = document.querySelector(".scale-0");
    if (element) {
      element.classList.remove("scale-0");
      element.classList.add("scale-100");
    }
  }, 100);
  return (
    <div className="absolute top-0 left-0 rounded-2xl w-full h-full z-10 bg-[rgba(0,0,0,0.4)]  flex justify-center items-center transition ease-in-out delay-150">
      <div className="relative w-[80%]  max-h-[80%] rounded-xl bg-white z-20 scale-0 transform transition-transform duration-1000">
        <img
          src={Cancel}
          alt="cancel"
          className="absolute right-3 top-3 cursor-pointer"
          onClick={onClickCancel}
        />
        <div className="w-full justify-between flex p-5 mt-5">
          <div>
            <p>
              <span className="text-3xl font-extrabold">
                {sessionStorage.getItem("name")} &nbsp;
              </span>
              님의
              <br />
              구매 목록
            </p>
          </div>
          <div>
            <div className="rounded-full bg-[#00B289] w-[60px] h-[60px] flex justify-center items-center font-extrabold text-3xl text-white">
              +8
            </div>
          </div>
        </div>

        <div className="px-3 h-[calc(100%-120px)] overflow-y-auto  py-1">
          <div className="rounded-xl bg-[#EAEAEA] w-full p-4 mb-3 mt-3 px-7">
            <div className="flex justify-between w-full">
              <div>해태)갈아만든배500ml</div>
              <div className="font-black">1개</div>
            </div>
          </div>
          <div className="rounded-xl bg-[#E6FDE6] w-full p-4 mb-3 px-7 relative">
            <div className="flex justify-between w-full">
              <div>몬스터에너지울트라355ml</div>
              <div className="font-black">1개</div>
            </div>
            <div className="flex justify-between w-full">
              <div className="font-black text-3xl text-[#00B289]">+5</div>
              <img
                src={Tree1}
                alt="tree1"
                className="absolute bottom-0 right-6"
              />
            </div>
          </div>
          <div className="rounded-xl bg-[#EAEAEA] w-full p-4 mb-3 mt-3 px-7">
            <div className="flex justify-between w-full">
              <div>코카콜라페트500ml</div>
              <div className="font-black">1개</div>
            </div>
          </div>
          <div className="rounded-xl bg-[#E6FDE6] w-full p-4 mb-3 px-7 relative">
            <div className="flex justify-between w-full">
              <div>칠성사이다캔250ml</div>
              <div className="font-black">1개</div>
            </div>
            <div className="flex justify-between w-full">
              <div className="font-black text-3xl text-[#00B289]">+3</div>
              <img
                src={Tree2}
                alt="tree2"
                className="absolute bottom-0 right-6"
              />
            </div>
          </div>
          <div className="rounded-xl bg-[#EAEAEA] w-full p-4 mb-3 mt-3 px-7">
            <div className="flex justify-between w-full">
              <div>롯데)후라보노오리지날26g</div>
              <div className="font-black">1개</div>
            </div>
          </div>
          {/*
          <div className="rounded-xl bg-[#E6FDE6] w-full p-4 mb-3 px-7 relative">
            <div className="flex justify-between w-full">
              <div>칠성사이다캔250ml</div>
              <div className="font-black">1개</div>
            </div>
            <div className="flex justify-between w-full">
              <div className="font-black text-3xl text-[#00B289]">+1</div>
              <img
                src={Tree3}
                alt="tree3"
                className="absolute bottom-0 right-6"
              />
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}

export default PurchaseModal;
