import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import Sky from "../../assets/images/sky.png";
import ImageIcon from "../../assets/images/icons/Image.svg";
import SmallTree from "../../assets/images/icons/smallTree_green.svg";
import Receipt from "../../assets/images/icons/receipt.svg";

import AWS from "aws-sdk";
import PurchaseModal from "./PurchaseModal";
import RewardTreeModal from "./RewardTreeModal";
import RewardItemModal from "./RewardItemModal";
const REGION = process.env.REACT_APP_AWS_REGION;
const ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY;
const SECRET_KEY = process.env.REACT_APP_AWS_SECRET_KEY;
const BUCKET = process.env.REACT_APP_AWS_BUCKET;

AWS.config.update({
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY,
});

function MainContent() {
  const navigate = useNavigate();
  const photoInput = useRef(null);
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const [treeOpen, setTreeOpen] = useState(true);
  const [itemOpen, setItemOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("name")) {
      navigate("/login")
    }
  },[])

  const onClickImage = () => {
    navigate("gallery");
  };

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
            setPurchaseOpen(true);
          }
        });
      }
    }
  };

  useEffect(() => {
    if (purchaseOpen) {
      // 구매 목록 api 받아오기
    }
  },[purchaseOpen])

  /*
  useEffect(() => {
    setModalOpen((prev) => prev);
  }, [modalOpen]);
  */
  return (
    <>
      <div className="bg-[#68A67D] w-full h-full">
        <div className="">
          {purchaseOpen && (
            <PurchaseModal
              purchaseOpen={purchaseOpen}
              setPurchaseOpen={setPurchaseOpen}
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
            <RewardItemModal itemOpen={itemOpen} setItemOpen={setItemOpen} />
          )}
        </div>
        <Header />
        <div>
          <div className="mt-[16%] flex justify-center items-center relative">
            <img src={Sky} alt="sky" width="70%" />
            <div className="flex justify-center items-center absolute bottom-[11.5%] font-bold text-4xl text-white">
              582
            </div>
            <div className="flex justify-center items-center absolute top-[14.5%] w-full h-full">
              <img src={SmallTree} alt="smalltree" width="20%" />
            </div>
          </div>

          <div className="mt-[15%] flex justify-center items-center">
            <div
              className="bg-white rounded-full p-5 shadow-2xl w-[70px] h-[70px] cursor-pointer"
              onClick={onClickCamera}
            >
              <img src={Receipt} alt="recipt" />
              <input
                className="hidden"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={handlePhoto}
                ref={photoInput}
              />
            </div>
          </div>

          <div className="mt-[15%] flex justify-center items-center">
            <img
              src={ImageIcon}
              alt="imageicon"
              width={27}
              height={27}
              onClick={onClickImage}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
