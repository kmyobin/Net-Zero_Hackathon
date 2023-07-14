import React, { useState } from "react";
import pinkTree from "../../assets/images/tree_pink.png";
import yellowTree from "../../assets/images/tree_yellow.png";
import bigGreenTree from "../../assets/images/bigTree_green.png";
import normalGreenTree from "../../assets/images/normalTree_green.png";
import logo from "../../assets/images/icons/gardenerLogo.svg";
import facebook from "../../assets/images/icons/facebook.svg";
import instagram from "../../assets/images/icons/instagram.svg";
import google from "../../assets/images/icons/google.svg";

function LoginContent() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  return (
    <div>
      <div className="flex flex-col items-center mt-14 gap-5">
        <img
          src={logo}
          alt="logo"
          className="w-[75px] rounded-2xl"
          style={{
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        />
        <div className="flex flex-col items-center -mb-4">
          <div className="text-[20px]">지구와 함께하는</div>
          <div className="text-[20px]">어쩌구저쩌구 서비스</div>
        </div>
        <h1 className="font-bold text-[30px]">가드너 (Gardener)</h1>
        <form className="flex flex-col gap-4 relative mt-4">
          <input
            className="w-[300px] h-[60px] bg-[#D9D9D9] rounded-3xl p-2 outline-none placeholder:pl-4"
            placeholder="아이디를 입력해 주세요!"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          ></input>
          <input
            className="w-[300px] h-[60px] bg-[#D9D9D9] rounded-3xl p-2 outline-none placeholder:pl-4"
            placeholder="비밀번호를 입력해 주세요!"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
            }}
          ></input>
          <span className="absolute right-0 -bottom-6 text-[#929292] text-xs opacity-70">
            Forget Password?
          </span>
        </form>
        <div className="flex gap-9 mt-8">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={google} alt="google" />
        </div>
      </div>
      <img
        src={pinkTree}
        alt="pinkTree"
        className="absolute bottom-0 left-[10%] w-[73px]"
      />
      <img
        src={yellowTree}
        alt="yellowTree"
        className="absolute bottom-0 left-[20%] w-[106px]"
      />
      <img
        src={bigGreenTree}
        alt="bigGreenTree"
        className="absolute bottom-0 right-[10%] w-[155px]"
      />
      <img
        src={normalGreenTree}
        alt="normalGreenTree"
        className="absolute bottom-0 right-[30%] w-[89px]"
      />
    </div>
  );
}

export default LoginContent;
