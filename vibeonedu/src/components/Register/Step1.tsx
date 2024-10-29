import Image from "next/image";
import { RegistrationUser } from "@/types/types";
import { useRef, useState } from "react";

interface Props {
  pageCounter: number;
  setPageCounter: (number: number) => void;
  setUser: (user: RegistrationUser) => void;
  user: RegistrationUser;
}

export const Step1 = ({
  setUser,
  pageCounter,
  setPageCounter,
  user,
}: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const surNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const surName = surNameRef.current?.value;
    const email = emailRef.current?.value;

    if (!name || !surName || !email) {
      setError("Please fill in all the inputs");
      return;
    }

    setError("");

    if (pageCounter <= 1) {
      setPageCounter(pageCounter + 1);
    }

    setUser({
      ...user,
      name: name || undefined,
      surname: surName,
      email: email,
    });
  };

  const handleInput = () => {
    if (nameRef.current?.value && surNameRef.current?.value && emailRef.current?.value) {
      setError("");
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
        <div className="h-[10px] rounded bg-customOrangeHover w-1/4"></div>
        <div className="h-[10px] rounded bg-customOrangeHover w-1/4"></div>
        <div className="h-[10px] rounded bg-customOrangeHover w-1/4"></div>
      </div>

      <div className="text-white w-full">
        <h1 className="text-3xl font-semibold mb-5">
          Учи денес, добивај утре!
        </h1>
        <p className="text-xl mb-10">
          Продолжи <span className="font-bold">да вајбаш!</span>
        </p>
      </div>

      <form className="w-full mb-16" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            id="first_name"
            className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5 text-customOrange placeholder:text-customOrange"
            placeholder="Име"
            ref={nameRef}
            onInput={handleInput}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            ref={surNameRef}
            id="last_name"
            className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5 text-customOrange placeholder:text-customOrange"
            placeholder="Презиме"
            onInput={handleInput}
          />
        </div>
        <div className="mb-5">
          <input
            type="email"
            ref={emailRef}
            id="email"
            className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5 text-customOrange placeholder:text-customOrange"
            placeholder="Маил адреса"
            onInput={handleInput}
          />
        </div>

        {error && <p className="text-red-500 text-md mb-4">{error}</p>}

        <button
          type="submit"
          className="bg-customOrange text-white font-bold w-full rounded-lg py-3"
        >
          Продолжи
        </button>
      </form>

      <p className="mb-5 text-xl">Или</p>
      <div className="flex flex-row mb-5">
        <Image
          src={"/images/signIn/gmail.svg"}
          height={32}
          width={32}
          alt="gmail"
          className="mr-2"
        />
        <Image
          src={"/images/signIn/facebook.svg"}
          height={32}
          width={32}
          alt="facebook"
          className="ml-2"
        />
      </div>
    </div>
  );
};
