import Footer from "@/components/Footer";
import BottomSection from "@/components/homepage/BottomSection";
import Carousel from "@/components/homepage/Carousel";
import HeroSection from "@/components/homepage/HeroSection";
import MainSection from "@/components/homepage/MainSection";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="mt-[-120px]">
      <NavBar />
      <HeroSection />
      <MainSection />
      <BottomSection />
      <div className="pt-20 pb-20 w-[80%] mx-auto">
        <Carousel />
      </div>
      <Footer />
    </div>
  );
}
