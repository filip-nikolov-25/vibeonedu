import Footer from "@/components/Footer";
import BottomSection from "@/components/homepage/BottomSection";
import Carousel from "@/components/homepage/Carousel";
import HeroSection from "@/components/homepage/HeroSection";
import MainSection from "@/components/homepage/MainSection";
import NavBar from "@/components/NavBar";

// interface FunFact {
//   id: number;
//   name: string;
//   created_at: string;
//   updated_at: string;
// }

// interface Props {
//   funFacts: FunFact[];
// }

// const funFactsArr = [
//   {
//     id: 1,
//     name: "„Финансиската слобода е достапна за оние кои учат за неа и работат за неа.",
//     authot: "Роберт Киосаки",
//   },
// ];

const Home: React.FC = () => {
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
};



export default Home;
