import React, { useEffect,useState } from "react";
import Tree from "./Tree";
import Home from "../assets/images/icons/Home.svg";
import { useNavigate } from "react-router-dom";
import Cloud from "../assets/images/icons/cloud.svg";
import axios from "axios";

const api_end_point = "http://www.cookie-server.shop:9000";

function Header() {
  const navigate = useNavigate();
  const [score, setScore] = useState(9000); 

  const onClickHome = () => {
    navigate("/");
  };

  const onClickCloud = () => {
    navigate("/");
  };

  const Lo = window.location.pathname;

  useEffect(() => {
    axios.get(api_end_point+"/user/1")
      .then((res) => {
        setScore(res.data.result.totalScore);
      })
      .catch((err) => {
        console.log(err);
    })
  }, [])

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
          <Tree score={score} />
        </div>
      </div>
    </nav>
  );
}

export default Header;
