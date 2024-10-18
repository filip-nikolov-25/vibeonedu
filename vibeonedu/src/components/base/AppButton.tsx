import React from "react";

interface Props {
  padding?: string;
  width?: string;
  color?: string;
  borderRadius?: string;
  backgroundColor?: string;
  onClick?: () => void;
  children: React.ReactNode;
  margin: string;
}

const AppButton = ({
  width = "auto",
  padding = "auto",
  color = "#fff",
  margin = "auto",
  borderRadius = "5px",
  backgroundColor = "#2870ED",
  onClick,
  children,
}: Props) => {
  return (
    <button
      style={{ width, padding, color, backgroundColor, margin, borderRadius }}
      onClick={onClick}
    >
      <div className="flex items-center">
        {children}{" "}
        <i className="fa-solid fa-arrow-right-long ml-3 text-[22px]"></i>
      </div>
    </button>
  );
};

export default AppButton;
