import React from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-5 relative h-full w-[70%]">
        <div className="w-full">{children}</div>
        <i onClick={onClose} className="fa-solid fa-x text-3xl absolute top-5 right-5"></i>
      </div>
    </div>
  );
};

export default Popup;
