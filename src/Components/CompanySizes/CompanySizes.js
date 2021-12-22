import React, { useState } from "react";

const CompanySizes = ({ compSize }) => {
  const [bgColor, setBgColor] = useState("#F0F0F0");
  const [fColor, setFColor] = useState("#000000");

  // Changing span background on click
  const handleClick = () => {
    if (bgColor === "#3766e8" && fColor === "#ffffff") {
      setBgColor("#F0F0F0");
      setFColor("#000000");
    } else {
      setBgColor("#3766e8");
      setFColor("#ffffff");
    }
  };

  return (
    <span
      onClick={handleClick}
      className="px-2 py-1 my-2 rounded-3"
      style={{ background: bgColor, color: fColor, cursor: "pointer" }}
    >
      {compSize.companySize}
    </span>
  );
};

export default CompanySizes;
