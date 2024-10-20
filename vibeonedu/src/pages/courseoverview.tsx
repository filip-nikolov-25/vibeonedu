import React, { useEffect, useState } from "react";

import NewNavBar from "@/components/NewNavBar";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import CourseCard from "@/components/base/CourseCard";
import AppButton from "@/components/base/AppButton/AppButton";

const CourseOverview = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Avoid rendering until the component is mounted on the client
  }

  const courses = [
    {
      title: "Лична финансиска гимнастика",
      allLectures: "Вкупно лекции: 6",
      remainingLectures: "Преостанати лекции: 0",
      averageLearningTime: "Просечно време на читање ;3ч35мин",
      id: 1,
    },
    {
      title: "Лична финансиска гимнастика",
      allLectures: "Вкупно лекции: 6",
      remainingLectures: "Преостанати лекции: 0",
      id: 2,
    },
    {
      title: "Лична финансиска гимнастика",
      allLectures: "Вкупно лекции: 6",
      remainingLectures: "Преостанати лекции: 0",
      id: 3,
    },
  ];

  return (
    <div className="relative">
      <div className="">
        <NewNavBar />
      </div>
      <div className="flex mt-10 z-30 relative">
        <SideBar /> {/* Added sidebar */}
        <div className="w-[70%] ml-[27.5%] relative p-10 bg-gray-200">
          <div>
            <h2 className="text-7xl w-[20%] mb-10">Добредојде, Томи!</h2>
            <p className="text-5xl">Препорачано за тебе:</p>
          </div>
          <div className="bg-customBlue p-7 rounded-xl text-white absolute top-5 right-[20%] w-[30%]">
            <p>
              Твојата финансиска иднина започнува тука! За почеток, избравме
              курсеви според твоите интереси.
            </p>
          </div>
          <div className="h-5 w-5 bg-customBlue rounded-lg absolute top-5 right-[18%]"></div>
          <div className="h-3 w-3 bg-customBlue rounded-lg top-12 absolute right-[17%]"></div>

          <div className="absolute top-0 right-16">
            <Image
              src={"/images/dashBoardImgs/dashBoardHeroImage.png"}
              width={209}
              height={273}
              alt="image"
            />
          </div>

          <div className="flex mt-20">
            {courses.map((course) => (
              <CourseCard
                allLectures={course.allLectures}
                title={course.title}
                remainingLectures={course.remainingLectures}
                key={course.id}
                marginRight={course.id !== 3}
              />
            ))}
          </div>
          <div className="text-center">
            <AppButton
              padding="10px 20px"
              backgroundColor="#ff6130"
              margin="1.5rem 0"
            >
              Рагледај повеќе
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
