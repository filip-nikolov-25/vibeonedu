import React, { useState } from "react";
import Image from "next/image";
import ProfiliInput from "./filip/components/ProfiliInput";
import Button from "./filip/components/Button";

const filip = () => {
    const [lekcii, setLekcii] =  useState(true)
    const [napredokPreporaki, setNapredokPreporaki] = useState(true)
    const [promotivniPonud, setPromotivniPonud] = useState(true)
    const [novini, setNovini] = useState(true)
    return (
        <div className="p-4">
            <form className="space-y-6" action="">
            <div>
                <p className="font-bold">E-mail нотификации</p>
                <p>за што би сакале да бидете известени преку е-пошта</p>
                <div className="flex text-[#2870ED]">
                        <div className="w-[50%]">
                            <input className="" checked={lekcii} onChange={() => (setLekcii((prevState) => !prevState))}  id="lekcii" type="checkbox" /> <label htmlFor="lekcii">Известувања за нови лекции и материјали</label>
                        </div>
                        <div className="w-[50%]">
                            <input onChange={() => (setNapredokPreporaki(!napredokPreporaki))} id="napredokPreporaki" type="checkbox" /> <label htmlFor="napredokPreporaki">Напредок и препораки</label>
                        </div>
                </div>
                <div className="flex text-[#2870ED]">
                    <div className="w-[50%]">
                        <input onChange={() => (setPromotivniPonud(!promotivniPonud))} id="promotivniPonudi" type="checkbox" /><label htmlFor="promotivniPonudi">Промотивни понуди и матектинг од Шпаркасе банка</label>
                    </div>
                    <div className="w-[50%]">
                        <input onChange={() => (setNovini(!novini))} id="novini" type="checkbox" /><label htmlFor="novini">Новини на плаатформа и настани</label>
                    </div>
                </div>
                
            </div>
            <div className="flex justify-between rounded-lg p-8 bg-[#2870ED]">
                <div className="space-y-2 text-white mx-auto my-auto">
                    <p className="text-xl">Лука и Ана ти посакуваат</p>
                    <p className="text-4xl">Добредојде на</p>
                    <p className="text-4xl">VibeOnEdu!</p>
                </div>
                <div>
                    {/* Use the Next.js Image component */}
                    <Image 
                        src="/images/filip/spar_03.png" // Replace this with your actual image path
                        alt="Welcome Image"
                        width={387}  // Set the width
                        height={440} // Set the height
                        className="rounded-full" // Example of styling, feel free to customize
                    />
                </div>
            </div>
            <p>За подобро искуство, персонализирај го твојот профил и додади информации за твоите цели и интереси.</p>
            <div>
                <div className="text-orange-400 rounded-lg flex flex-col  items-center justify-center w-32 h-32 m-auto border-orange-400 border-4 font-bold">
                        <p>Додади</p>
                        <p>фотографија</p>
                </div>
            </div>
            <div>
                <p>Социјални профили</p>
                <p>останете во контакт и споделете го вашиот напредок со заедницата</p>
                <div className="space-y-4">
                    <ProfiliInput socijalnaMreza="facebook" />
                    <ProfiliInput socijalnaMreza="instagram" />
                    <ProfiliInput socijalnaMreza="linkedin" />                    
                </div>
            </div>
            <div className="flex justify-center gap-4">
                <Button style="border-orange-500" value="Ќе прилагодам подоцна"/>              
                <Button style="border-orange-500 bg-orange-500" value="Зачувај поставки"/>
            </div>
            </form>
        </div>
    );
};

export default filip;
