import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-[90%] mx-auto ">
      <div className="flex justify-between items-center">
        <div className="">
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              width={78}
              height={100}
              alt="logo"
            />
          </Link>
        </div>

        <div className="flex">
          <p className="mr-5">Контакт</p>
          <p className="mr-5">ЧПП</p>
          <p className="">Политика на приватност</p>
        </div>
        <div className="flex">
          <div className="mr-5">
            <Image
              src={"/images/sparkaseLogoOrig.png"}
              width={170}
              height={44}
              alt="logo"
            />
          </div>
          <div>
            <i className="fa-brands fa-linkedin text-customBlue text-4xl mr-3"></i>
            <i className="fa-brands fa-instagram text-customBlue text-4xl mr-3"></i>
            <i className="fa-brands fa-facebook text-customBlue text-4xl"></i>
          </div>
        </div>
      </div>
      <p className="text-center mt-10 mb-5 text-customBlue text-l">
        © VibeOnEdu
      </p>
    </footer>
  );
};

export default Footer;
