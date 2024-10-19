import React, { useState } from "react";
import CourseOverviewCard from "../base/CourseOverviewCard";

const CourseOverview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const courses = [
    { color: "#0cb43f", title: "Лична Финансиска Гимнастика", id: 1 },
    { color: "#0cb43f", title: "Лична Финансиска Активност", id: 2 },
    { color: "#0cb43f", title: "Лична Финансиска Дисциплина", id: 3 },
    { color: "#0cb43f", title: "Лична Финансиска Вештина", id: 4 },
    { color: "#0cb43f", title: "Лична Финансиска Мајсторија", id: 5 },
    { color: "#0cb43f", title: "Лична Финансиска Стратегија", id: 6 },
  ];

  const visibleCourses = courses.slice(currentIndex, currentIndex + 3); 

  

  const handleNext = () => {
    if (currentIndex < courses.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex justify-between mb-20">
        <p className="text-3xl text-customGreen">Преглед на курсеви.</p>
        <div>
          <i
            className={`fa-solid fa-arrow-left-long mr-5 text-customDarkGreen text-3xl ${currentIndex === 0 ? 'opacity-50' : ''}`}
            onClick={handlePrev}
            style={{ cursor: currentIndex === 0 ? 'not-allowed' : 'pointer' }} 
          ></i>
          <i
            className={`fa-solid fa-arrow-right-long text-customDarkGreen text-3xl ${currentIndex >= courses.length - 3 ? 'opacity-50' : ''}`}
            onClick={handleNext}
            style={{ cursor: currentIndex >= courses.length - 3 ? 'not-allowed' : 'pointer' }}
          ></i>
        </div>
      </div>
      <div className="flex">
        {visibleCourses.map((course) => (
          <CourseOverviewCard
            color={course.color}
            title={course.title}
            key={course.id}
            marginRight={course.id !== visibleCourses[visibleCourses.length - 1].id}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseOverview;
