import React, { useState } from "react";
import CourseCard from "../CourseCard";

export interface Course {
  title: string;
  allLectures: string;
  remainingLectures: string;
  averageLearningTime: string;
  id: number;
}

interface Props {
  cardsToShow: number;
  isThreeCardLayout: boolean;
  title: string;
  allCourses: Course[];
  onOpenPopup: () => void;
}

const CoursesCarousel: React.FC<Props> = ({
  cardsToShow,
  isThreeCardLayout,
  title,
  allCourses,
  onOpenPopup,
}) => {
  const [startIndex, setStartIndex] = useState(0);


  const nextCourses = () => {
    if (
      startIndex <
      allCourses.length - (isThreeCardLayout ? 3 : cardsToShow)
    ) {
      setStartIndex(startIndex + (isThreeCardLayout ? 3 : cardsToShow));
    }
  };

  const prevCourses = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - (isThreeCardLayout ? 3 : cardsToShow));
    }
  };

  const isPrevDisabled = startIndex === 0;
  const isNextDisabled =
    startIndex >= allCourses.length - (isThreeCardLayout ? 3 : cardsToShow);

  return (
    <div className="mt-10">
      <div className="bg-customGray p-10">
        <div className="flex justify-between mb-5">
          <p className="text-3xl font-bold">{title}</p>
          <div>
            <i
              className={`fa-solid mr-5 fa-arrow-left-long text-2xl cursor-pointer ${
                isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={prevCourses}
            ></i>
            <i
              className={`fa-solid fa-arrow-right-long text-2xl cursor-pointer ${
                isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={nextCourses}
            ></i>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          {allCourses
            .slice(
              startIndex,
              startIndex + (isThreeCardLayout ? 3 : cardsToShow)
            )
            .map((course, index) => (
              <CourseCard
                allLectures={course.allLectures}
                title={course.title}
                remainingLectures={course.remainingLectures}
                key={course.id}
                marginRight={
                  index % (isThreeCardLayout ? 3 : 1) !==
                  (isThreeCardLayout ? 2 : 0)
                }
                onOpenPopUp={onOpenPopup} 
              />
            ))}

 
        </div>
      </div>
    </div>
  );
};

export default CoursesCarousel;
