import React from "react";
import CourseProgress from "./CourseProgress";
import UserStatus from "@/components/DashBoardPage/UserStatus";
import CoursesCarousel from "./CoursesCarousel";
import HeroSection from "./HeroSection";

const ExistingUserPage = () => {
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
      <CoursesCarousel />
    </div>
  );
};

export default ExistingUserPage;
