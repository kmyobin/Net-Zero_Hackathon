import React from 'react'
import Logo from "../logo.svg"

function Header() {
  return (
      <nav className="flex h-24 w-full items-center pl-5 bg-slate-500">
        <img src={Logo} width={50} height={50} alt="로고 이름" />
        <span className="flex items-center justify-center text-xl font-bold text-[#00396E]">
          로고 이름
        </span>
      </nav>
  )
}

export default Header
