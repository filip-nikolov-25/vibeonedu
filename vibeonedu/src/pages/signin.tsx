import Image from "next/image"

const SignIn = () => {
     return (
          <div className="h-screen flex items-center justify-center bg-customBlue">
               <div className="flex flex-col items-center lg:w-[20%] text-start text-white">
                    <Image
                         src={"/images/logo.png"}
                         height={77}
                         width={100}
                         alt="logo"
                         className="mb-20"
                    />
                    <div className="text-white w-full">
                         <h1 className="text-3xl font-semibold mb-5">
                              Учи денес, добивај утре!
                         </h1>
                         <p className="text-xl mb-10">Продолжи <span className="font-bold">да вајбаш!</span></p>
                    </div>
                    <form className="w-full mb-16">
                         <div className="mb-3">
                              <input type="text" id="email" className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5  text-customOrange placeholder:text-customOrange" placeholder="Маил адреса" required />
                         </div>
                         <div className="mb-5">
                              <input type="password" id="password" className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5  text-customOrange placeholder:text-customOrange" placeholder="Лозинка" required />
                         </div>
                         <button className="bg-customOrange text-white font-bold w-full rounded-lg py-3">
                              Најави се
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
                    <p className="text-xl text-center">Доколку си нов корисник, <span className="font-semibold text-customOrange">регистрирај се.</span></p>

               </div>
          </div>

     )
}

export default SignIn
