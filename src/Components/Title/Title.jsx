import React from "react";

const Title = ({ text1, text2 = "UrbanFit", style }) => {
  return (
    <>
      {/* Page Title */}
      <div className={`w-title ${style} mb-10 `}>
        <span className="font-bold text-[3.5rem] text-white">{text1} </span>
        <span className="font-extrabold text-[3.2rem] text-brandClr">
          {text2}
        </span>
      </div>
    </>
  );
};

export default Title;
