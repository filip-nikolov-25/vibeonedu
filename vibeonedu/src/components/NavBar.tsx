import Image from "next/image";
import React from "react";
import AppButton from "./base/AppButton/AppButton";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="w-[80%] mx-auto bg-customBlue pb-2 pt-2 pr-16 pl-16 top-5 sticky z-30 rounded-xl border-2 border-white">
      <div className="flex justify-between text-white items-center">
        <Link href={"/"}>
          <Image src="/images/logo.png" width={63} height={100} alt="logo" />
        </Link>
        <ul className="flex list-none">
          <li className="mr-7">Почетна</li>
          <li className="mr-7">Курсеви</li>
          <li className="mr-7">VibeOn Edu</li>
          <li className="mr-7">Шпаркасе Банка</li>
          <li>Контакт</li>
        </ul>
        <div>
          <AppButton
            margin="0 1rem 0 0 "
            padding="6px 20px"
            backgroundColor="#ff6130"
          >
            Регистрација
          </AppButton>
          <AppButton
            margin="0 1rem 0 0 "
            padding="6px 20px"
            backgroundColor="#ff6130"
          >
            Најави се
          </AppButton>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
