import React from "react";
import CardCol2 from "../../Components/Card/CardCol2/CardCol2";
import Title from "../../Components/Title/Title";
import GymGirl from "../../Data/Img/gym-girl.png";
import Boss from "../../Data/Img/boss.png";
// import "./Procedure.css";

const Procedure = () => {
  const styleText2 = `font-normal text-sm`;

  return (
    <>
      <div className="p-wraper mt-[6rem] flex flex-col flex-nowrap justify-start items-start h-auto">
        {/* Title */}
        <Title text1="Prerequisites &" text2="Procedure" />

        <div className="p-content grid-col-2  md:grid-cols-2 lg:grid-cols-2 p-4">
          {/*Left Side */}
          <div className="p-left">
            <img
              src={GymGirl}
              alt="partner"
              className="scale-150 md:scale-110 lg:scale-90 mt-[2rem]  z-[-1]"
            />
          </div>
          {/*Right Side */}
          <div className="p-right mt-4 md:mt-2 lg:mt-[-2rem]">
            <p className="text-white text-xl mt-10 md:mt-3 lg:mt-0">
              We are looking for people who are ready and eager to work with us
              to successfully launch a franchise and smoothly operate it.
            </p>
            <div className="p-r-cardlist grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-8 mt-4">
              {/* <p className=" font-normal text-sm text-justify">h</p> */}
              <CardCol2
                text2="Willing to donate time and resources to
              the business"
                icon={Boss}
                style1="w-c-subtitle"
                style2="procedure-card"
                styleText2={styleText2}
              />
              <CardCol2
                text2="Long term vision and the determination"
                icon={Boss}
                style1="w-c-subtitle"
                style2="procedure-card"
                styleText2={styleText2}
              />
              <CardCol2
                text2="Financial and logistical requirements and guidelines"
                icon={Boss}
                style1="w-c-subtitle"
                style2="procedure-card"
                styleText2={styleText2}
              />
              <CardCol2
                text2="Financial and logistical requirements and guidelines"
                icon={Boss}
                style1="w-c-subtitle"
                style2="procedure-card"
                styleText2={styleText2}
              />
              <CardCol2
                text2="Financial and logistical requirements and guidelines"
                icon={Boss}
                style1="w-c-subtitle"
                style2="procedure-card"
                styleText2={styleText2}
              />
              <CardCol2
                text2="Financial and logistical requirements and guidelines"
                icon={Boss}
                style1="w-c-subtitle"
                style2="procedure-card"
                styleText2={styleText2}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Procedure;
