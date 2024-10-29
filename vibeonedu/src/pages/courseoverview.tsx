import React, { useState } from "react";

import NewNavBar from "@/components/NewNavBar";
import SideBar from "@/components/SideBar";

import { HeroProgress } from "@/components/CourseOverviewPage/HeroProgress";
import { LessonList } from "@/components/CourseOverviewPage/LessonList";
import { CourseInfo } from "@/components/CourseOverviewPage/CourseInfo";
import CoursesCarousel from "@/components/base/ExistingUserPage/CoursesCarousel";
import { Course } from "@/types/types";
import Popup from "@/components/PopupProps";
import PreviewCoursePopUp from "@/components/base/popup/PreviewCoursePopUp";

const CourseOverview = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const courses: Course[] = [
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
    {
      title: "Долгови и кредитирање",
      allLectures: "Вкупно лекции: 7",
      remainingLectures: "Преостанати лекции: 5",
      averageLearningTime: "Просечно време на читање: 3ч15мин",
      id: 4,
    },
    {
      title: "Финансиски аналитика",
      allLectures: "Вкупно лекции: 10",
      remainingLectures: "Преостанати лекции: 6",
      averageLearningTime: "Просечно време на читање: 5ч00мин",
      id: 5,
    },
    {
      title: "Кредитна анализа",
      allLectures: "Вкупно лекции: 4",
      remainingLectures: "Преостанати лекции: 2",
      averageLearningTime: "Просечно време на читање: 1ч30мин",
      id: 6,
    },
  ];

  console.log(courses, "course overview");
  return (
    <div>
      <NewNavBar />
      <div className="flex">
        <div className="w-[20%]">
          <SideBar />
        </div>
        <div className="w-[90%] mt-10">
          <div className="w-[92%] mx-auto">
            <HeroProgress />
          </div>
          <div className="flex w-[92%] mt-10 mx-auto">
            <LessonList />
            <CourseInfo />
          </div>
          <div className="w-[97%] ">
            <CoursesCarousel
              cardsToShow={3}
              isThreeCardLayout
              allCourses={courses}
              title="Твоите курсеви."
              onOpenPopup={handleOpenPopup}
            />
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
          <PreviewCoursePopUp />
        </Popup>
      )}
    </div>
  );
};

export default CourseOverview;
