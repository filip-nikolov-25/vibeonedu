import React from "react";
import ChooseCourseCard from "./ChooseCourseCard";

const BottomSection = () => {
  return (
    <div className="w-[70%] mx-auto pt-24 pb-24">
      <h2 className="text-5xl mb-16 text-customOrange text-center">
        Разгледај ги нашите курсеви.
      </h2>
      <div className="flex">
        <div className="1/2">
          <ChooseCourseCard
            title="НАУЧИ ЗА СЕБЕ."
            description="Овој модул ви помага брзо и лесно да ги совладате основните вештини за лични финансии и управување со пари."
            color="#028661"
            buttonColor="#028661"
          />
        </div>
        <div className="1/2">
          <ChooseCourseCard
            title="НАУЧИ ЗА СЕБЕ."
            description="Овој модул ви помага брзо и лесно да ги совладате основните вештини за лични финансии и управување со пари."
            color="#721c72"
            buttonColor="#721c72"
            
          />
        </div>
      </div>
    </div>
  );
};
// #721c72
// 028661

export default BottomSection;
