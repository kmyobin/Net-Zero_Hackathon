import React, { useEffect, useState } from "react";
import Header from "./Header";

function PageTemplate({ content }) {
  const [contentHeight, setCt] = useState();
  useEffect(() => {
    setCt(document.querySelector("#contentHeight"));
  }, []);
  return (
    <div className="w-full h-screen flex justify-center flex-wrap items-center">
      <div
        className="relative flex h-[97.5%] w-full flex-col justify-between overflow-hidden bg-[#ECEFF4] rounded-2xl"
        id="contentHeight"
        style={{
          width: contentHeight && contentHeight.offsetHeight * 0.6 + "px",
        }}
      >
        <Header />
        <div className="h-screen flex justify-center items-center">
          {content}
        </div>
      </div>
    </div>
  );
}

export default PageTemplate;
