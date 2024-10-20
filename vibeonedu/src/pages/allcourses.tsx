import HeroSection from "@/components/AllCoursesPage/HeroSection";
import CourseProgress from "@/components/base/ExistingUserPage/CourseProgress";
import CoursesCarousel from "@/components/base/ExistingUserPage/CoursesCarousel";
import NewNavBar from "@/components/NewNavBar";
import SideBar from "@/components/SideBar";
import React from "react";

const Allcourses = () => {
  return (
    <div>
      <NewNavBar />
      <div className=" flex ">
        <div className="w-[20%] ">
          <SideBar />
        </div>
        <div className=" w-[80%] ml-10 mt-10 ">
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
              title="Твоите курсеви."
            />
          </div>
          <div className="w-[97%]">
            <CoursesCarousel
              cardsToShow={6}
              isThreeCardLayout={false}
              title="Повеќе од „Научи за себе.“"
            />
          </div>
          <div className="w-[97%]">
            <CoursesCarousel
              cardsToShow={4}
              isThreeCardLayout={false}
              title="Повеќе од „Научи за својот бизнис.“"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allcourses;
