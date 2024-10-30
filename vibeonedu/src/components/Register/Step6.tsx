import Image from "next/image";
import Link from "next/link";
import Popup from "../PopupProps";
import PopUpAfterRegister from "../base/popup/PopUpAfterRegister";
import { useState } from "react";

interface Props {
  pageCounter: number;
  setPageCounter: (number: number) => void;
}

export const Step6 = ({ pageCounter, setPageCounter }: Props) => {
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="flex flex-col items-center lg:w-[20%] text-center text-white">
      <Image
        src={"/images/logo.png"}
        height={77}
        width={100}
        alt="logo"
        className="mb-20"
      />

      <div className="text-white w-full">
        <h1 className="text-3xl font-semibold mb-5">
          Сега е време да го освоиш светот!
        </h1>
      </div>
      <Link href={"/dashboard"}>
        <button
          onClick={() => {
            setPageCounter(pageCounter + 1);
            handleOpenPopup();
          }}
          className="bg-customOrange text-white font-bold w-full rounded-lg py-3"
        >
          Продолжи кон твојот профил
        </button>
      </Link>
      {isPopupOpen && (
        <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
          <PopUpAfterRegister />
        </Popup>
      )}
    </div>
  );
};
