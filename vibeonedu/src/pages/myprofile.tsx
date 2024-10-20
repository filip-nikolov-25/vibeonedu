import CourseCard from "@/components/base/CourseCard";
import NewNavBar from "@/components/NewNavBar";
import Badge from "@/components/ProfilePage/Badge";
import Certificate from "@/components/ProfilePage/Certificate";
import HeroSection from "@/components/ProfilePage/HeroSection";
import SideBar from "@/components/SideBar";
import { div } from "framer-motion/client";
import Image from "next/image";
import React, { useState } from "react";

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState<
    "current" | "favorite" | "completed"
  >("current"); // Default active tab

  // Function to handle tab clicks
  const handleTabClick = (tab: "current" | "favorite" | "completed") => {
    setActiveTab(tab);
  };
  const courses = [
    {
      title: "Лична финансиска гимнастика",
      allLectures: "Вкупно лекции: 6",
      remainingLectures: "Преостанати лекции: 0",
      averageLearningTime: "Просечно време на читање: 3ч35мин",
      id: 1,
    },
    {
      title: "Основи на инвестирање",
      allLectures: "Вкупно лекции: 8",
      remainingLectures: "Преостанати лекции: 2",
      averageLearningTime: "Просечно време на читање: 4ч20мин",
      id: 2,
    },
    {
      title: "Планирање на буџет",
      allLectures: "Вкупно лекции: 5",
      remainingLectures: "Преостанати лекции: 3",
      averageLearningTime: "Просечно време на читање: 2ч50мин",
      id: 3,
    },
  ];

  return (
    <div>
      <NewNavBar />
      <div className="flex">
        <div className="w-[20%]">
          <SideBar />
        </div>
        <div className="w-[80%] ml-10 mt-10">
          <HeroSection />
          <div className="mt-10 p-10 w-[97%] rounded-xl bg-customGray">
            <div className="flex justify-between items-center">
              <div className="flex">
                <div className="border-4 mr-5 rounded-xl border-customBlue">
                  <Image
                    src={"/images/profilePic.jpg"}
                    width={80} // You can change the size as needed
                    className="rounded-md"
                    height={50} // Adjust this size as well
                    alt="profile-pic"
                  />
                </div>
                <div>
                  <p className="text-xl font-bold text-customBlue mb-1">
                    Томи Андреев
                  </p>
                  <p className="mb-1">email@emailaddress.com</p>
                  <p>Skopje</p>
                </div>
              </div>
              <p className="text-customBlue text-xl font-bold">Промени</p>
            </div>
          </div>

          <div className="mt-10 flex border-2 rounded-lg w-[97%] border-customOrange">
            <div
              className={`text-center w-1/3 p-4 cursor-pointer ${
                activeTab === "current"
                  ? "bg-customOrange text-white font-bold"
                  : ""
              }`}
              onClick={() => handleTabClick("current")}
            >
              Тековни курсеви
            </div>
            <div
              className={`text-center w-1/3 p-4 cursor-pointer ${
                activeTab === "favorite"
                  ? "bg-customOrange text-white font-bold"
                  : ""
              }`}
              onClick={() => handleTabClick("favorite")}
            >
              Омилени курсеви
            </div>
            <div
              className={`text-center w-1/3 p-4 cursor-pointer ${
                activeTab === "completed"
                  ? "bg-customOrange text-white font-bold"
                  : ""
              }`}
              onClick={() => handleTabClick("completed")}
            >
              Завршени курсеви
            </div>
          </div>

          <div className="flex w-[98%] mt-10 gap-5">
            {" "}
            {/* Add gap property here */}
            {courses.map((course) => (
              <CourseCard
                isHighlighted
                allLectures={course.allLectures}
                remainingLectures={course.remainingLectures}
                title={course.title}
                key={course.id}
              />
            ))}
          </div>
          <div>
            <h2 className="text-4xl mt-5 font-bold">Сертификати</h2>
            <Certificate
              courseName="Управување со личен бизнис"
              imageSrc="/images/profilePageImgs/certificate (silver)-01.png"
            />
            <Certificate
              courseName="Лична Финансиска Гимнастика"
              imageSrc="/images/profilePageImgs/cetrificate02.png"
            />
          </div>
          <div>
            <h3 className="text-4xl font-bold mt-5">Беџови</h3>
            <div className="flex flex-wrap">
              <Badge
                imageSrc="/images/profilePageImgs/financeBadge.png"
                badgeName="Финансиски Пионер"
                progress="ОСВОЕН"
              />
              <Badge
                imageSrc="/images/profilePageImgs/financeBadge.png"
                badgeName="Капитален Архитект
              "
                progress="ВО ПРОГРЕС"
                marginRight={false}
              />
              <Badge
                imageSrc="/images/profilePageImgs/financeBadge.png"
                badgeName="Стратешки Визионер
              "
                progress="ВО ПРОГРЕС"
              />
              <Badge
                imageSrc="/images/profilePageImgs/financeBadge.png"
                badgeName="CEO"
                progress="ВО ПРОГРЕС"
                marginRight={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
