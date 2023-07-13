import React, { useEffect, useState, useCallback } from "react";
// import Header from "./Header";

function PageTemplate({ content }) {
  const [contentHeight, setContentHeight] = useState();

  const setContentWidth = useCallback(() => {
    const CH = document.querySelector("#contentHeight");
    CH.style.width = contentHeight;
  }, [contentHeight]);

  useEffect(() => {
    setContentHeight(
      (document.querySelector("#contentHeight").offsetHeight * 6) / 11 + "px"
    );
  }, []);

  useEffect(() => {
    setContentWidth();
  }, [contentHeight, setContentWidth]);

  window.addEventListener("resize", () => {
    setContentHeight(
      (document.querySelector("#contentHeight").offsetHeight * 6) / 11 + "px"
    );
  });

  return (
    <div className="w-full h-screen flex justify-center flex-wrap items-center">
      <div
        className="relative flex h-[97.5%] w-full flex-col justify-between overflow-hidden bg-[#ECEFF4] rounded-2xl"
        id="contentHeight"
      >
        {/* <Header /> */}
        <div className="h-screen flex justify-center">{content}</div>
      </div>
    </div>
  );
}

export default PageTemplate;
