import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import Sky from "../../assets/images/sky.png";
import Receipt from "../../assets/images/icons/receipt.svg";
import LoadingIcon from "../../assets/images/icons/loading.svg"
import AWS from "aws-sdk";
import PurchaseModal from "./PurchaseModal";
import RewardTreeModal from "./RewardTreeModal";
import RewardItemModal from "./RewardItemModal";

import axios from "axios";
import Loading from "./Loading";
const REGION = process.env.REACT_APP_AWS_REGION;
const ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY;
const SECRET_KEY = process.env.REACT_APP_AWS_SECRET_KEY;
const BUCKET = process.env.REACT_APP_AWS_BUCKET;

AWS.config.update({
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY,
});

const api_end_point = "http://www.cookie-server.shop:9000";

function MainContent() {
  const navigate = useNavigate();
  const photoInput = useRef(null);
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const [treeOpen, setTreeOpen] = useState(false);
  const [itemOpen, setItemOpen] = useState(false);
  const [score, setScore] = useState(5000);
  const [treename, setTreename] = useState("greensmall");
  const [treesize, setTreesize] = useState(50);
  const [picUrl, setPicUrl] = useState("");
  const [isOverScore, setIsOverScore] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("name")) {
      navigate("/login");
    }

    axios
      .get(api_end_point + "/user/1")
      .then((res) => {
        setScore(res.data.result.score);
        let color = res.data.result.color;
        let size = res.data.result.size;

        //console.log(color, size);

        if (color === 1 && size === 1) {
          setTreename("yellowsmall");
          setTreesize(50);
        } else if (color === 1 && size === 2) {
          setTreename("yellownormal");
          setTreesize(150);
        } else if (color === 1 && size === 3) {
          setTreename("yellowbig");
          setTreesize(200);
        } else if (color === 2 && size === 1) {
          setTreename("pinksmall");
          setTreesize(50);
        } else if (color === 2 && size === 2) {
          setTreename("pinknormal");
          setTreesize(150);
        } else if (color === 2 && size === 3) {
          setTreename("pinkbig");
          setTreesize(200);
        } else if (color === 3 && size === 1) {
          setTreename("greensmall");
          setTreesize(50);
        } else if (color === 3 && size === 2) {
          setTreename("greennormal");
          setTreesize(150);
        } else if (color === 3 && size === 3) {
          setTreename("greenbig");
          setTreesize(200);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onClickCamera = () => {
    photoInput.current.click();
  };

  const handlePhoto = (e) => {
    if (e.target.files.length !== 0) {
      console.log("설정 완료", e.target.files[0]);

      const s3 = new AWS.S3();
      if (e.target.files[0]) {
        const params = {
          Bucket: BUCKET,
          Key: e.target.files[0].name,
          Body: e.target.files[0],
        };

        console.log("params", params);
        console.log("ASDFasdfasd");

        let pic_url;
        s3.upload(params, (err, data) => {
          if (err) {
            console.log("오류", err);
          } else {
            console.log("성공", data);
            pic_url = data.Location;
            setPicUrl(data.Location);
            setLoading(true);
            setPurchaseOpen(true);
          }
        });
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
    if (purchaseOpen) {
      // 구매 목록 api 받아오기
      getPurchaseList();
    }
  }, [purchaseOpen, loading]);

  const getPurchaseList = () => {
    axios.get(api_end_point + "/receipt",
      {
        params: {
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/fir-test-c1c89.appspot.com/o/receipt.jpg?alt=media&token=40ea4e4a-6756-4f73-917c-2e75e9a8c72c"
        }
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickGarden = () => {
    navigate("/gallery");
  };

  // 테스트
  const getScore = (score) => {
    axios
      .get("http://www.cookie-server.shop:9000/score/1", {
        params: {
          // score값은 이전에 증가한 score로
          score: score,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.result.currentTreeScoreIs === true) {
          setItemOpen(true);
        }
        if (res.data.result.totalScoreIs === true) {
          setIsOverScore(true);
        }
      });
  };


  return (
    <>
      {/* 테스트용 버튼
      <button
        onClick={() => {
          getScore(10);
        }}
      >
        테스트
      </button> */}
      {loading && (
        <Loading/>
      )}

      <div className="bg-[#68A67D] w-full h-full">
        <div className="">
          {purchaseOpen && !loading && (
            <PurchaseModal
              purchaseOpen={purchaseOpen}
              setPurchaseOpen={setPurchaseOpen}
              getScore={getScore}
            />
          )}
        </div>
        <div className="">
          {treeOpen && (
            <RewardTreeModal treeOpen={treeOpen} setTreeOpen={setTreeOpen} />
          )}
        </div>
        <div className="">
          {itemOpen && (
            <RewardItemModal
              itemOpen={itemOpen}
              setItemOpen={setItemOpen}
              isOverScore={isOverScore}
              setTreeOpen={setTreeOpen}
            />
          )}
        </div>
        <Header />
        <div>
          <div className="mt-[16%] flex justify-center items-center relative">
            <div
              className="w-[70%] flex justify-center items-center  hover:scale-110 cursor-pointer duration-300"
              onClick={onClickGarden}
            >
              <img src={Sky} alt="sky" width="100%" />
              <div className="flex justify-center items-center absolute bottom-[11.5%] font-bold text-4xl text-white">
                {score}
              </div>
              {/*<div className="flex justify-center items-center absolute bottom-[29%] w-[25%]">*/}
              <img
                src={require(`../../assets/images/trees/${treename}.png`)}
                alt="tree"
                className={`absolute bottom-[29%] ${
                  treesize == 50
                    ? "h-[50px]"
                    : treesize == 150
                    ? "h-[150px]"
                    : "h-[180px]"
                }`}
                //className="w-[25%] "
              />
              {/*</div>*/}
            </div>
          </div>

          <div className="mt-[18%] flex justify-center items-center">
            <div
              className="bg-white rounded-full p-5 shadow-2xl w-[70px] h-[70px] cursor-pointer"
              onClick={onClickCamera}
            >
              <img src={Receipt} alt="receipt" />
              <input
                className="hidden"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={handlePhoto}
                ref={photoInput}
              />
            </div>
          </div>

          <div className="mt-[15%] flex justify-center items-center text-center text-xs text-[#FFFFFF]">
            ⓒ 2023. GREENCODER <br />
            All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
