import Image from "next/image"

export const Step2 = () => {
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
                    <h1 className="text-3xl font-semibold mb-5">
                         Ти остана уште малку!
                    </h1>
                    <p className="text-xl mb-10">Продолжи <span className="font-bold">да вајбаш!</span></p>
               </div>
               <form className="w-full mb-16">
                    <div className="mb-3">
                         <input type="text" id="sex" className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5  text-customOrange placeholder:text-customOrange" placeholder="Пол" required />
                    </div>
                    <div className="mb-3">
                         <input type="text" id="city" className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5  text-customOrange placeholder:text-customOrange" placeholder="Град" required />
                    </div>
                    <div className="mb-3">
                         <input type="date" id="birth_date" className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5  text-customOrange placeholder:text-customOrange" placeholder="Датум на раѓање" required />
                    </div>
                    <div className="mb-3">
                         <input type="text" id="phone_number" className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5  text-customOrange placeholder:text-customOrange" placeholder="Телефонски број" required />
                    </div>
                    <div className="mb-5">
                         <input type="password" id="password" className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5  text-customOrange placeholder:text-customOrange" placeholder="Лозинка" required />
                    </div>
                    <div className="mb-5">
                         <input type="password" id="password" className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5  text-customOrange placeholder:text-customOrange" placeholder="Повтори лозинка" required />
                    </div>
                    <div className="mb-5 text-md">
                         <input type="radio" name="" id="" /> Поле за согласност за промотивен контакт.
                    </div>
                    <button className="bg-customOrange text-white font-bold w-full rounded-lg py-3">
                         Продолжи
                    </button>
               </form>
          </div>
     )
}