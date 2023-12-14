import React from "react";

interface CustomMarkerProps {
  content: string;
}

export const CustomMarker: React.FC<CustomMarkerProps> = ({ content }) => (
  <div>
    <p className="bg-white p-3 rounded-full flex justify-center items-center cursor-pointer">
      {content}
    </p>
  </div>
);
