import React from "react";

const Location = () => {
  return (
    <>
      <div className="w-wraper mt-[6rem] flex flex-col flex-nowrap justify-start items-start h-auto">
        {/* Page Title */}
        <div className="w-title mb-10 m-auto">
          <span className="font-bold text-[3.5rem] text-white">Location </span>
          <span className="font-extrabold text-[3.2rem] text-brandClr">
            UrbanFit
          </span>
        </div>
        <div className="flex flex-row flex-wrap gap-6 justify-center items-center m-auto p-4   ">
          <h2 className="w-c-subtitle l-c-subtitle">
            UrbanFit Shop - F Residency
          </h2>
          <h2 className="w-c-subtitle l-c-subtitle ">
            UrbanFit Shop - Kharadi
          </h2>
          <h2 className="w-c-subtitle l-c-subtitle">
            UrbanFit Shop - Bibewadi
          </h2>
        </div>
      </div>
    </>
  );
};

export default Location;
