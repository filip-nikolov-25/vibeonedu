import React, { useState } from "react";
import CourseOverviewCard from "../base/CourseOverviewCard";
import PreviewCoursePopUp from "../base/popup/PreviewCoursePopUp";
import Popup from "../PopupProps";

const SecondCourseOverviewSection = () => {
  const courses = [
    { color: "#eb4c79", title: "Лична Финансиска Гимнастика", id: 1 },
    { color: "#eb4c79", title: "Лична Финансиска Активност", id: 2 },
    { color: "#eb4c79", title: "Лична Финансиска Дисциплина", id: 3 },
    { color: "#eb4c79", title: "Лична Финансиска Вештина", id: 4 },
    { color: "#eb4c79", title: "Лична Финансиска Мајсторија", id: 5 },
    { color: "#eb4c79", title: "Лична Финансиска Стратегија", id: 6 },
  ];

  const [counter, setCounter] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const visibleCourses = courses.slice(counter, counter + 3);

  const handleNext = () => {
    if (counter < courses.length - 3) {
      setCounter((prevState) => prevState + 1);
    }
  };

  const handlePrevious = () => {
    if (counter > 0) {
      setCounter((prevState) => prevState - 1);
    }
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex justify-between mb-20">
        <p className="text-3xl text-customPink">Преглед на курсеви.</p>
        <div>
          <i
            className={`fa-solid fa-arrow-left-long mr-5 ${
              counter <= 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            } text-customPurple text-3xl`}
            onClick={handlePrevious}
          ></i>
          <i
            className={`fa-solid fa-arrow-right-long ${
              counter >= courses.length - 3
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            } text-customPurple text-3xl`}
            onClick={handleNext}
          ></i>
        </div>
      </div>
      <div className="flex">
        {visibleCourses.map((course) => (
          <CourseOverviewCard
            key={course.id}
            title={course.title}
            color={course.color}
            marginRight={true} // Update logic for margin
            handleButtonClick={handleOpenPopup} // Pass the openPopUp handler
          />
        ))}
      </div>
      {isPopupOpen && (
        <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
          <PreviewCoursePopUp />
        </Popup>
      )}
    </div>
  );
};

export default SecondCourseOverviewSection;
