import React, { useState } from "react";
import CourseOverviewCard from "../base/CourseOverviewCard";

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

  return (
    <div className="w-[80%]  mx-auto">
      <div className="flex justify-between mb-20">
        <p className="text-3xl text-customPink">Преглед на курсеви.</p>
        <div>
          <i
            className={`fa-solid fa-arrow-left-long mr-5 ${
              counter <= 0 ? "cursor-not-allowed: text-purple-400" : "cursor-pointer"
            }   text-customPurple text-3xl`}
            onClick={handlePrevious}
          ></i>
          <i
            className={`fa-solid fa-arrow-right-long ${
              counter >= 3 ? "cursor-not-allowed: text-purple-400" : "cursor-pointer"
            }  text-customPurple text-3xl`}
            onClick={handleNext}
          ></i>
        </div>
      </div>
      <div className="flex ">
        {visibleCourses.map((course) => (
          <CourseOverviewCard
            key={course.id}
            title={course.title}
            color={course.color}
            marginRight={
              visibleCourses.length - 1 !== 3 && visibleCourses.length - 1 !== 6
            }
          />
        ))}
      </div>
    </div>
  );
};

export default SecondCourseOverviewSection;
