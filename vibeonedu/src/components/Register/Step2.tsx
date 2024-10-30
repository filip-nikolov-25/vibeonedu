import Image from "next/image";
import { RegistrationUser } from "@/types/types";
import { useRef } from "react";

interface Props {
  user: RegistrationUser;
  setUser: (user: RegistrationUser) => void;
  pageCounter: number;
  setPageCounter: (number: number) => void;
}

export const Step2 = ({
  setUser,
  user,
  pageCounter,
  setPageCounter,
}: Props) => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfrimationRef = useRef<HTMLInputElement>(null);

  //@ts-expect-error type Any

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = passwordRef.current?.value;
    const passwordConfirmation = passwordConfrimationRef.current?.value;

    if (password && passwordConfirmation) {
      setUser({
        ...user,
        password: password,
        password_confirmation: passwordConfirmation,
      });
    }

    if (pageCounter <= 2) {
      setPageCounter(pageCounter + 1);
    }
  };

  return (
    <div className="flex flex-col items-center lg:w-[20%] text-start text-white">
      <Image
        src={"/images/logo.png"}
        height={77}
        width={100}
        alt="logo"
        className="mb-20"
      />
      <div className="flex space-x-2 w-full mb-5">
        <div className="h-[10px] rounded bg-customOrange w-1/4"></div>
        <div className="h-[10px] rounded bg-customOrange w-1/4"></div>
        <div className="h-[10px] rounded bg-customOrangeHover w-1/4"></div>
        <div className="h-[10px] rounded bg-customOrangeHover w-1/4"></div>
      </div>

      <div className="text-white w-full">
        <h1 className="text-3xl font-semibold mb-5">Ти остана уште малку!</h1>
        <p className="text-xl mb-10">
          Продолжи <span className="font-bold">да вајбаш!</span>
        </p>
      </div>

      <form className="w-full mb-16" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            id="sex"
            className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5 text-customOrange placeholder:text-customOrange"
            placeholder="Пол"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            id="city"
            className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5 text-customOrange placeholder:text-customOrange"
            placeholder="Град"
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            id="birth_date"
            className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5 text-customOrange placeholder:text-customOrange"
            placeholder="Датум на раѓање"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            id="phone_number"
            className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5 text-customOrange placeholder:text-customOrange"
            placeholder="Телефонски број"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            id="password"
            ref={passwordRef}
            className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5 text-customOrange placeholder:text-customOrange"
            placeholder="Лозинка"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            id="password_confirmation"
            ref={passwordConfrimationRef}
            className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5 text-customOrange placeholder:text-customOrange"
            placeholder="Повтори лозинка"
          />
        </div>
        <div className="mb-5 text-md">
          <input type="radio" name="consent" id="consent" /> Поле за согласност
          за промотивен контакт.
        </div>

        <button
          type="submit"
          className="bg-customOrange text-white font-bold w-full rounded-lg py-3"
        >
          Продолжи
        </button>
      </form>
    </div>
  );
};
