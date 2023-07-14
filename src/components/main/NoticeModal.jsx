import React from 'react'
import Cancel from "../../assets/images/icons/cancel.svg";
import LevelUp from "../../assets/images/icons"
function NoticeModal({ noticeOpen, setNoticeOpen }) {
  const onClickCancel = () => {
    setNoticeOpen(!noticeOpen);
  };
  return (
    <div className="absolute top-0 left-0 rounded-2xl w-full h-full z-10 bg-[rgba(0,0,0,0.4)]  flex justify-center items-center">
      <div className="relative w-[80%] h-[70%] rounded-xl bg-white z-20 ">
        <img
          src={Cancel}
          alt="cancel"
          className="absolute right-3 top-3 cursor-pointer"
          onClick={onClickCancel}
        />

        <div className='flex justify-center items-center'>
          <div className='font-[1000] text-4xl mt-16'>축하합니다!</div>          
        </div>

      </div>
    </div>
  );
}

export default NoticeModal
