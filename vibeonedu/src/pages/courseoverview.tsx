import React, { useEffect, useState } from "react";
import { HeroProgress } from "@/components/CourseOverviewPage/HeroProgress";
import { LessonList } from "@/components/CourseOverviewPage/LessonList";
import { CourseInfo } from "@/components/CourseOverviewPage/CourseInfo";

const CourseOverview = () => {
     const [isMounted, setIsMounted] = useState(false);

     useEffect(() => {
          setIsMounted(true);
     }, []);

     if (!isMounted) {
          return null; // Avoid rendering until the component is mounted on the client
     }

     return (
          <div className="mx-16 my-14">
               <HeroProgress />
               <div className="mt-6 flex flex-row justify-between gap-9">
                    <LessonList />
                    <CourseInfo />
               </div>
          </div>
     );
};

export default CourseOverview;
