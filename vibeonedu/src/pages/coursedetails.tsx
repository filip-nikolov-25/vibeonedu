import StartYourCourseOrangeSection from "@/components/base/StartYourCourseOrangeSection";
import CourseOverview from "@/components/CourseDetailPage/CourseOverview";
import HeroSection from "@/components/CourseDetailPage/HeroSection";
import PinkSection from "@/components/CourseDetailPage/PinkSection";
import SecondCourseOverviewSection from "@/components/CourseDetailPage/SecondCourseOverviewSection";
import NavBar from "@/components/NavBar";

const Coursedetails = () => {
  return (
    <div className="mt-[-120px]">
      <NavBar />
      <HeroSection />
      <div className="mt-20 mb-20">
        <CourseOverview />
      </div>
      <PinkSection />
      <div className="mt-20 mb-20">
        <SecondCourseOverviewSection />
      </div>

      <StartYourCourseOrangeSection
        bgColor="#ff6130"
        showPicture={false}
        buttonColor="#2870ed"
      />
    </div>
  );
};

export default Coursedetails;
