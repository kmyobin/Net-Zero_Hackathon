import React from 'react'
import styled from "styled-components"
import LoadingIcon from "../../assets/images/loading.gif"

 const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  //background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

 const LoadingText = styled.div`
  text-align: center;
`;

function Loading() {
  return (
    <Background>
      <div className="rounded-xl w-[60%] bg-white p-5">
        <div className='flex justify-center items-center'>
          <img
            src={LoadingIcon}
            alt="loading"
            className="w-[75%]"
          />
        </div>
        <LoadingText>영수증 인식 중 . . .</LoadingText>
      </div>
    </Background>
  );
}

export default Loading
