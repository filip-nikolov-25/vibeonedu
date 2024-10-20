import React from "react";

interface Props {
  title: string;
  allLectures: string;
  remainingLectures: string;
  marginRight?: boolean;
  description?: string;
  isHighlighted?: boolean; // New prop to change background color
}

const CourseCard = ({
  allLectures,
  marginRight = true,
  remainingLectures,
  title,
  isHighlighted = false, // Default value set to false
}: Props) => {
  return (
    <div
      className={`rounded-lg p-5 ${
        isHighlighted ? "bg-customGray" : "bg-white"
      } ${marginRight ? "mr-5" : ""}`}
    >
      <div className="flex mb-10">
        <i className="fa-solid fa-circle-check mr-5 text-gray-400 text-3xl"></i>
        <p className="text-xl font-bold">{title}</p>
      </div>
      {/* {description && ( */}
        <div className="mb-10">
          <p>
            Нучи ги основите на управувањето со пари ,буџетирање,штедење и
            трошење така што ќе си...
          </p>
        </div>
      {/* )} */}
      <div className="h-2 bg-gray-300 rounded-2xl">
        <div className="h-2 bg-customGreen rounded-2xl w-[30%]"></div>
      </div>

      <div className="flex justify-between mb-5">
        <div className="W-[50%]">
          <div className="flex items-center">
            <i className="fa-solid fa-book mr-3 text-customOrange"></i>
            <p>{allLectures}</p>
          </div>
        </div>
        <div className="W-[50%]">
          <div className="flex items-center">
            <i className="fa-solid fa-book-open text-customBlue mr-2"></i>
            <p>{remainingLectures}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <i className="fa-solid fa-clock mr-3 text-customGreen"></i>
        <p>{marginRight}</p>
      </div>

      <div className="mt-10 flex justify-between">
        <button className="bg-transparent border-2 pt-2 pb-2 pl-8 pr-8 rounded-lg border-customGreen text-black">
          Брз преглед
        </button>
        <button className="bg-customGreen pt-2 pb-2 pl-8 pr-8 rounded-lg border-none text-white">
          Започни сега
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
