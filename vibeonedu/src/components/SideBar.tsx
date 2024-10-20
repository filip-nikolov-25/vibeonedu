import Image from "next/image";
import React, { useState } from "react";

const SideBar = () => {
  const [isClicked, setIsClicked] = useState({
    first: true,
    second: false,
    third: false,
    fourth: false,
  });
  return (
 
    <div className="w-[20%] rounded-tr-xl rounded-br-xl mt-10 absolute left-0 p-10 bg-gray-100 mr-10 ">
      <div className="flex w-full mb-10 justify-center">
        <Image src={"/images/logo.png"} width={63} height={100} alt="logo" />
      </div>
      <div className="text-customBlue">
        <div
          className={`flex p-4 mb-5  rounded-xl ${
            isClicked.first === true ? "bg-gray-200" : ""
          } `}
          onClick={() => {
            setIsClicked({
              first: true,
              second: false,
              third: false,
              fourth: false,
            });
          }}
        >
          <Image
            src={"/images/dashBoardImgs/sideBarFirstIcon.svg"}
            width={20}
            height={20}
            alt="vector"
          />
          <p className="ml-3">Главен панел</p>
        </div>
        <div
          className={`flex p-4  ${
            isClicked.second === true ? "bg-gray-200" : ""
          }  mb-5 rounded-xl `}
          onClick={() => {
            setIsClicked({
              first: false,
              second: true,
              third: false,
              fourth: false,
            });
          }}
        >
          <Image
            src={"/images/dashBoardImgs/sideBarSecondIcon.svg"}
            width={20}
            height={20}
            alt="vector"
          />
          <p className="ml-3">Мој профил</p>
        </div>
        <div
          className={`p-4 mb-5 flex rounded-xl  ${
            isClicked.third === true ? "bg-gray-200" : ""
          } `}
          onClick={() => {
            setIsClicked({
              first: false,
              second: false,
              third: true,
              fourth: false,
            });
          }}
        >
          <Image
            src={"/images/dashBoardImgs/sideBarThirdIcon.svg"}
            width={20}
            height={20}
            alt="vector"
          />
          <p className="ml-3">Курсеви</p>
        </div>
        <div
          className={`p-4 mb-5 flex rounded-xl  ${
            isClicked.fourth === true ? "bg-gray-200" : ""
          } mb-[10rem]`}
          onClick={() => {
            setIsClicked({
              first: false,
              second: false,
              third: false,
              fourth: true,
            });
          }}
        >
          <Image
            src={"/images/dashBoardImgs/sideBarFourthIcon.svg"}
            width={20}
            height={20}
            alt="vector"
          />
          <p className="ml-3">Штедомер</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
