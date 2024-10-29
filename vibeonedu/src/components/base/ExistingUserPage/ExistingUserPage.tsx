import React, { useState } from "react";
import CourseProgress from "./CourseProgress";
import UserStatus from "@/components/DashBoardPage/UserStatus";
import CoursesCarousel from "./CoursesCarousel";
import HeroSection from "./HeroSection";
import UnderUserStatusCardSection from "@/components/DashBoardPage/UnderUserStatusCardSection";
import Popup from "@/components/PopupProps";
import PreviewCoursePopUp from "../popup/PreviewCoursePopUp";
import { Course } from "@/types/types";

const ExistingUserPage = () => {
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

  return (
    <div>
      <HeroSection />
      <CourseProgress
        firstIconText="Вкупно лекции : 6"
        secondIconText="Преостанати лекции: 4"
        thirdIconText="Просечно време на читање: 3ч35мин"
      />

      <div className="mt-10">
        <UserStatus />
      </div>
      <div className="mt-10">
        <UnderUserStatusCardSection />
      </div>
      <CoursesCarousel
        cardsToShow={3}
        isThreeCardLayout
        allCourses={courses}
        title="Твоите курсеви."
        onOpenPopup={handleOpenPopup}
      />
      {isPopupOpen && (
        <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
          <PreviewCoursePopUp />
        </Popup>
      )}
    </div>
  );
};

export default ExistingUserPage;
