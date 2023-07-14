import React from 'react'
import TreeIcon from "../assets//images/baricon.png"

function Tree() {
  return <div className=" rounded-3xl bg-white text-[#929292] flex justify-between w-full">
    <div className='pl-5 pr-7 justify-center flex items-center text-sm' >
      4582
    </div>
    <div className='pr-2 pt-2'>
      <img src={TreeIcon} alt="TreeIcon"/>
    </div>
  </div>;
}

export default Tree
