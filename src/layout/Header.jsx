import React from "react";
import Tree from "./Tree";
import Home from "../assets/images/icons/Home.svg";
import { useNavigate } from "react-router-dom";
import Cloud from "../assets/images/icons/cloud.svg";

function Header() {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/");
  };

  const onClickCloud = () => {
    navigate("/");
  };

  const Lo = window.location.pathname;

  return (
    <nav className="flex h-20 w-full items-center p-[8%] bg-[rgba(100,100,100,0)]">
      <div className="flex justify-between w-full ">
        <div className="flex justify-center items-center">
          {Lo.includes("gallery") && (
            <img
              src={Home}
              alt="Home"
              width={30}
              height={30}
              onClick={onClickHome}
              className="cursor-pointer transition-all hover:scale-110"
            />
          )}
        </div>
        <div>
          <Tree />
        </div>
      </div>
    </nav>
  );
}

export default Header;
