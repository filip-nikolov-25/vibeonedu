import React from "react";
import Slider from "./Slidebar";
import Image from "next/image";

export const HeroProgress = () => {
     return (
          <div className="bg-customGray rounded-2xl p-7">
               <div className="flex flex-row justify-between">
                    <div className="flex-col">
                         <h1 className="font-bold text-4xl my-2">Лични финансии</h1>
                         <p className="my-2">
                              Научи ги основите на управувањето со пари – буџетирање, штедење и трошење, така што ќе си ја подобриш финансиската кондиција.
                         </p>
                    </div>
                    <Image
                         src={"/images/courseOverview/lockedCourse.png"}
                         width={400}
                         height={246}
                         alt="lockedCourse"
                         className="flex-col"
                    />
               </div>
               <div>
                    <p className="flex items-center space-x-4">
                         <span className="flex items-center">
                              <img
                                   src="/images/courseOverview/icons/totalLectures.svg"
                                   width={24}
                                   height={24}
                                   alt="totalLectures" />
                              <span className="ml-2">Вкупно лекции: 6</span>
                         </span>
                         <span className="flex items-center">
                              <img
                                   src="/images/courseOverview/icons/remaining.svg"
                                   width={24}
                                   height={24}
                                   alt="remainingLectures" />
                              <span className="ml-2">Преостанати лекции: 4</span>
                         </span>
                         <span className="flex items-center">
                              <img
                                   src={"/images/courseOverview/icons/readingTime.svg"}
                                   width={24}
                                   height={24}
                                   alt="readingTime" />
                              <span className="ml-2">Просечно време на читање: 3ч35мин</span>
                         </span>
                    </p>
               </div>
               <div className="ml-2 mt-5">
                    <Slider />
               </div>
               <div className="my-5">
                    <button className="rounded-md border-2 border-customGreen py-2 px-8 mr-3">
                         Продолжи со учење
                    </button>
                    <button className="rounded-md border-2 border-customGreen bg-customGreen text-white py-2 px-8">
                         Реши го тестот
                    </button>
               </div>
          </div>
     )
}