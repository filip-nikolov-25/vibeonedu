import React from "react";
import Image from "next/image";

export default function WelcomeHeader(): JSX.Element {
  return (
    <div className="bg-blue-500 text-white p-4 pl-16 rounded-lg flex justify-between items-center w-full">
      <div className="w-[45%] flex-row justify-center items-center">
        <h2> Лука и Ана ти посакуваат</h2>
        <h1 className="text-[2rem] font-semibold  w-[80%]">
          Добредојде на
          <br /> VibeOn Edu!
        </h1>
      </div>
      <div className="w-[45%] flex justify-center items-center relative top-4 left-10">
        <Image
          src={"/images/previewPopup/characters_sprite.svg"}
          alt="characters"
          width={295}
          height={295}
        />

      </div>
      <button className="flex self-start">
            <Image
                src={"/images/previewPopup/x_close.svg"}
                alt="arrow"
                width={40}
                height={40}
            />
        </button>
    </div>
  );
}
