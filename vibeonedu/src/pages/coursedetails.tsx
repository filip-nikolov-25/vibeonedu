import StartYourCourseOrangeSection from "@/components/base/StartYourCourseOrangeSection";
import CourseOverview from "@/components/CourseDetailPage/CourseOverview";
import HeroSection from "@/components/CourseDetailPage/HeroSection";
import PinkSection from "@/components/CourseDetailPage/PinkSection";
import SecondCourseOverviewSection from "@/components/CourseDetailPage/SecondCourseOverviewSection";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

const Coursedetails = () => {
  return (
    <div className="">
        <NavBar />
      <HeroSection />
      <div className="mt-20 mb-20">

      <CourseOverview />
      </div>
      <PinkSection />
      <div className="mt-20 mb-20">

      <SecondCourseOverviewSection />
      </div>
      <StartYourCourseOrangeSection bgColor="#ff6130" showPicture={false} buttonColor="#2870ed"/>
      <Footer />
    </div>
  );
};

export default Coursedetails;
