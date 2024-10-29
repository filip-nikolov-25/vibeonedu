import React, { useState } from "react";
import HeroSection from "@/components/AllCoursesPage/HeroSection";
import CourseProgress from "@/components/base/ExistingUserPage/CourseProgress";
import CoursesCarousel, {
  Course,
} from "@/components/base/ExistingUserPage/CoursesCarousel";
import NewNavBar from "@/components/NewNavBar";
import SideBar from "@/components/SideBar";
import Popup from "@/components/PopupProps";
import PreviewCoursePopUp from "@/components/base/popup/PreviewCoursePopUp";

const Allcourses = () => {
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
      <NewNavBar />
      <div className="flex">
        <div className="w-[20%]">
          <SideBar />
        </div>
        <div className="w-[80%] ml-10 mt-10">
          <HeroSection />
          <div className="mt-10 w-[97%]">
            <CourseProgress
              firstIconText="Вкупно преостанати курсеви: 13"
              secondIconText="Последно освен беџ: / "
              thirdIconText="Следен беџ: Финансиски Пионер"
            />
          </div>
          <div className="w-[97%]">
            <CoursesCarousel
              cardsToShow={3}
              isThreeCardLayout
              allCourses={courses}
              title="Твоите курсеви."
              onOpenPopup={handleOpenPopup}
/>
          </div>
          <div className="w-[97%]">
            <CoursesCarousel
              allCourses={courses}
              cardsToShow={6}
              isThreeCardLayout={false}
              title="Повеќе од „Научи за себе.“"
              onOpenPopup={handleOpenPopup} // Pass the open popup function
            />
          </div>
          <div className="w-[97%]">
            <CoursesCarousel
              allCourses={courses}
              cardsToShow={4}
              isThreeCardLayout={false}
              title="Повеќе од „Научи за својот бизнис.“"
              onOpenPopup={handleOpenPopup} // Pass the open popup function
            />
          </div>
        </div>
      </div>

      {/* Render the popup if isPopupOpen is true */}
      {isPopupOpen && (
        <Popup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
        >
          
        <PreviewCoursePopUp />
        </Popup>
      )}
    </div>
  );
};

export default Allcourses;
