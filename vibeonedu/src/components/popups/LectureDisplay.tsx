import React from "react";
import { useState } from "react";
import Image from "next/image";

export type PageContentType = {
  text?: string;
  subtitle?: string;
  align_right?: boolean;
  color?: "customOrange" | "customBlue";
  image?: string;
};

export type LectureDisplayProps = {
  content: {
    id: number;
    lecture_id: number;
    type: string;
    order: number;
    page_content: PageContentType[];
    // needs to be MAX 3 elements , will come back to fix types to enforce this
  }[];
};

export default function LectureGrid({
  content,
}: LectureDisplayProps): JSX.Element {
  const [lecturePage, setLecturePage] = useState(0);
  function handleNextPage(): void {
    setLecturePage((lecturePage) => {
      if (lecturePage >= content.length - 1) {
        // zavrsi lekcija
        return lecturePage;
      }
      return lecturePage + 1;
    });
  }

  function handlePreviousPage(): void {
    setLecturePage((lecturePage) => {
      if (lecturePage < 0) {
        return 0;
      }
      return lecturePage - 1;
    });
  }

  function loadPages(page_content: PageContentType[]): JSX.Element[] {
    if (!page_content) {
      return [];
    }
    const justifyVariants = {
        right: "text-right",
        left: "text-left",
    }
    const colorVariants = {
        customOrange: "text-customOrange",
        customBlue: "text-customBlue",
        default: "text-black",
    }
    const pages: Array<JSX.Element> = [];

    page_content.forEach((page) => {
      pages.push(
        <div className={"w-full flex justify-between items-start"}>
          <div className="w-[100%] h-full flex flex-col justify-start gap-y-4">
            <h1 className={`text-[1rem] font-semibold  w-full ${colorVariants[page.color? page.color : "default"]} ${justifyVariants[page.align_right? "right" : "left"]}`}>{page.subtitle}</h1>
            <p className={`${justifyVariants[page.align_right? "right" : "left"]} w-full text-[.9rem] ${colorVariants[page.color? page.color : "default"]}`}>{page.text}</p>
          </div>
          { page.image ? <Image src={page.image} alt="lecture-image" width={200} height={200} /> : undefined }
        </div>
      );
    });
    return pages;
  }

  return (
    <div className="rounded-lg border-2 h-full w-full border-customOrange flex flex-col items-center justify-start">
      <audio
        controls
        className="w-[95%] border-customOrange border-2 rounded-lg m-4"
      >
        <source src="horse.ogg" type="audio/ogg" />
        <source src="horse.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div id="LectureNavButtons" className="w-[95%] flex m justify-between">
        <div className="w-[12%] flex justify-between">
          <button disabled={true}>
            <Image
              src="/images/previewPopup/list_icon.svg"
              alt="list-layout"
              width={30}
              height={30}
            />
          </button>
          <button>
            <Image
              src="/images/previewPopup/grid_icon.svg"
              alt="grid-layout"
              width={30}
              height={30}
            />
          </button>
        </div>

        <div className="w-[12%] flex justify-between">
          <button>
            {lecturePage > 0 ? (
              <Image
                src="/images/previewPopup/left_arrow_icon.svg"
                alt="grid-layout"
                width={30}
                height={30}
                onClick={handlePreviousPage}
              />
            ) : undefined}
          </button>
          <button>
            {lecturePage < content.length - 1 ? (
              <Image
                src="/images/previewPopup/right_arrow_icon.svg"
                alt="grid-layout"
                width={30}
                height={30}
                onClick={handleNextPage}
              />
            ) : undefined}
          </button>
        </div>
      </div>

      <div
        id="LectureContent"
        className="w-[95%] h-[80%] flex flex-col items-center justify-start my-4  gap-y-4"
      >
        {loadPages(content[lecturePage].page_content)}
      </div>
    </div>
  );
}
/* Grid Lesson - Short Preview NEW */
